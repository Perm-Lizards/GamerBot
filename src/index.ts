import { Bot } from 'grammy';
import { BOT_TOKEN } from './config';

// Create a bot object
const bot = new Bot(BOT_TOKEN as string); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on('message:text', (ctx) => ctx.reply('Echo: ' + ctx.message.text));

// Start the bot (using long polling)
bot.start();
