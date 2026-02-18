import {
  REST,
  type RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import { config } from "dotenv";

import Logger from "./logger.js";

import type Slash from "../structure/command.js";
import Load from "./Loader.js";
config();

if (!process.env.TOKEN) throw new Error("TOKEN is not defined.");
if (!process.env.CLIENT_ID) throw new Error("CLIENT_ID is not defined.");

const rest = new REST().setToken(process.env.TOKEN);

async function RegisterCommands (): Promise<void> {
  const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
  await Load<Slash>("commands", (slash) => commands.push(slash.data.toJSON()));

  Logger("Started refreshing application (/) commands.", "yellow");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
    body: commands,
  });
}

RegisterCommands()
  .then(() => {
    Logger("Registered Commands.", "green");
  })
  .catch((e) => {
    Logger(`Failed to register Commands: ${e instanceof Error ? e.message : String(e)}`, "red");
  });
