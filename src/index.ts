import { Bot } from 'grammy';
import { BOT_TOKEN } from './config';

const bot = new Bot(BOT_TOKEN as string);

bot.command('start', (ctx) => {
  ctx.reply(
    'Приветствую! Я Телеграмм бот проекта GamerBot. Нажми на кнопку "GamerBot" чтобы открыть приложение'
  );
});

bot.start();
