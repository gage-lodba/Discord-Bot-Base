import { Events } from "discord.js";

import Event from "../structure/event.js";
import Logger from "../helpers/logger.js";

const clientReady: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  execute: async (_client) => {
    Logger(`Bot initialized.`, "green");
  },
};

export default clientReady;
