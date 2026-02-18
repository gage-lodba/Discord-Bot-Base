import {
  Collection,
  type SlashCommandOptionsOnlyBuilder,
  type ChatInputCommandInteraction,
  type SlashCommandBuilder,
} from "discord.js";

export const Commands = new Collection<string, Command>();

export default class Command {
  public constructor (
    public data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder,
    public execute: (
      interaction: ChatInputCommandInteraction,
    ) => Promise<void>,
  ) { }
}
