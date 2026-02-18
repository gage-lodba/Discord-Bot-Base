import { SlashCommandBuilder } from "discord.js";
import Slash from "../structure/command.js";

const ping = new Slash(
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async (interaction) => {
    await interaction.reply("Pong!");
  },
);

export default ping;
