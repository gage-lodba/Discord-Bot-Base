/*
  Discord Bot Base
  https://github.com/gage-lodba/Discord-Bot-Base

  List of client intents:
  https://discordjs.guide/popular-topics/intents.html

  List of client events:
  https://discord.js.org/docs/packages/discord.js/main/ClientEvents:Interface
*/

import { ActivityType, Client, type ClientEvents } from "discord.js";
import { config } from "dotenv";
import Load from "./helpers/Loader.js";
import type Event from "./structure/event.js";
import type Command from "./structure/command.js";
import { Commands } from "./structure/command.js";
config();

if (!process.env.TOKEN) throw new Error("TOKEN is not defined.");

const client = new Client({
  presence: {
    status: "online",
    activities: [{ name: "⌨️ Playing with code.", type: ActivityType.Custom }],
  },
  intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
});

await Load<Event<keyof ClientEvents>>("events", (event) =>
  client.on(event.name, event.execute.bind(event)),
);

await Load<Command>("commands", (command) =>
  Commands.set(command.data.name, command),
);

await client.login(process.env.TOKEN);
