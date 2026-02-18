import { ButtonStyle, ComponentType, MessageFlags, SlashCommandBuilder } from "discord.js";
import Slash from "../structure/command";

const info = new Slash(
  new SlashCommandBuilder()
    .setName("info")
    .setDescription("Displays basic info on the bot."),
  async (interaction) => {
    const { user } = interaction.client;

    await interaction.reply({
      embeds: [
        {
          author: {
            name: user.username,
            icon_url: user.displayAvatarURL(),
          },
          color: 0x7cb342,
          description: "**Bot base creator:** <@196494542768177154>",
        },
      ],
      components: [
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.Button,
              label: "Github",
              style: ButtonStyle.Link,
              url: "https://github.com/gage-lodba",
            },
          ],
        },
      ],
      flags: MessageFlags.Ephemeral,
    });
  },
);

export default info;
