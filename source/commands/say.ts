import { SlashCommandBuilder } from "discord.js";
import Slash from "../structure/command";

const say = new Slash(
    new SlashCommandBuilder()
        .setName("say")
        .setDescription("Replies with the given text.")
        .addStringOption((option) =>
            option
                .setName("text")
                .setDescription("The text to say.")
                .setRequired(true)
        ),
    async (interaction) => {
        await interaction.reply(interaction.options.getString("text", true));
    },
);

export default say;
