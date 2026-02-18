import { Events, MessageFlags } from "discord.js";
import Event from "../structure/event";
import { Commands } from "../structure/command";
import Logger from "../helpers/logger";

const interactionCreate: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  execute: async (interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = Commands.get(interaction.commandName);
      if (command == null) return;

      try {
        await command.execute(interaction);
        Logger(
          `Command ${interaction.commandName} executed by ${interaction.user.username}[${interaction.user.id}].`,
          "green",
        );
      } catch (err) {
        Logger(`Error in /${interaction.commandName}: ${err instanceof Error ? err.message : String(err)}`, "red");

        try {
          if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
              content: "There was an error while executing this command!",
              flags: MessageFlags.Ephemeral,
            });
          } else {
            await interaction.reply({
              content: "There was an error while executing this command!",
              flags: MessageFlags.Ephemeral,
            });
          }
        } catch {
          // Interaction may have expired or already been handled
        }
      }
    }
  },
};

export default interactionCreate;
