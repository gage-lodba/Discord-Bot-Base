<h1 align="center">Discord-Bot-Base</h1>

A simple discord bot base to serve as a foundation for anyone's discord bot. This project includes examples for commands and events for your discord bot.

### Runtime requirements

Compatible with both [Bun](https://bun.sh/) (>=1.0.0) and [Node.js](https://nodejs.org/) (>=18.0.0) via [tsx](https://tsx.is/).

### Creating a bot

You can create your bot through the [Developer Portal](https://discord.com/developers/applications). You will also find your bot token and application id.

### Setting up the bot

1. Provide your bot token and id inside the `.env` file.
2. Install dependencies.
3. Register slash commands.
4. Start the bot.

#### Bun

```bash
bun install
bun run register:bun
bun run start:bun
```

#### Node

```bash
npm install
npm run register
npm run start
```
