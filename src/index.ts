import { PrismaClient } from '@prisma/client';
import { Bot, Context, NextFunction } from 'grammy';
import { BOT_TOKEN } from './config';
import profiles from './handlers/profiles';

// our custom context
export type GameBotContext = Context & {
  prisma: PrismaClient;
};

const bot = new Bot<GameBotContext>(BOT_TOKEN as string);

const prisma = new PrismaClient();

// middlewares
bot.use(async (ctx: GameBotContext, next: NextFunction) => {
  ctx.prisma = prisma;

  await next();
});
bot.use(profiles);

bot.start();
