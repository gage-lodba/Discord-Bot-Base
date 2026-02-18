import { readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import Logger from "./logger.js";

export default async function Load<T> (
  directory: string,
  register: (o: T) => void,
): Promise<void> {
  Logger(`Loading ${directory}`, "cyan");
  const path = join(dirname(fileURLToPath(import.meta.url)), "..", directory);
  const files = await readdir(path);

  await Promise.all(
    files.map(async (file) => {
      try {
        const { default: object } = (await import(pathToFileURL(join(path, file)).href)) as {
          default: T | undefined;
        };

        if (object === undefined) return;

        register(object);
        Logger(`[+] ${file} loaded.`, "cyan");
      } catch (err) {
        Logger(`[-] ${file} failed to load: ${err instanceof Error ? err.message : String(err)}`, "red");
      }
    }),
  );
}
