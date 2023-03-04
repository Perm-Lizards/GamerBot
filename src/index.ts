import { Bot, Keyboard } from 'grammy';
import { BOT_TOKEN } from './config';

const bot = new Bot(BOT_TOKEN as string);

bot.on('message:text', (ctx) => ctx.reply('Echo: ' + ctx.message.text));

bot.start();
