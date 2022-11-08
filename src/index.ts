import { Bot, Keyboard } from 'grammy';
import { BOT_TOKEN, WEB_APP_HOST } from './config';

const bot = new Bot(BOT_TOKEN as string);

bot.command('start', async (ctx) => {
  const keyboard = new Keyboard();
  keyboard.webApp('Сделать заказ', WEB_APP_HOST as string);

  await ctx.reply('', {
    reply_markup: {
      keyboard: keyboard.build(),
      resize_keyboard: true,
    },
  });
});

bot.start();
