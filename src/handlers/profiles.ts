import { Profiles } from '@prisma/client';
import { Composer } from 'grammy';
import { GameBotContext } from '..';

const profiles = new Composer<GameBotContext>();

profiles.command('get_profile', async (ctx) => {
  const profile = await ctx.prisma.profiles.findFirst();

  ctx.reply(JSON.stringify(profile));
});

profiles.command('create_profile', async (ctx) => {
  const data: Profiles = {
    id: 1,
    bio: 'kek',
    git_link: 'lol',
  };

  const saved_profile = await ctx.prisma.profiles.create({
    data,
  });

  ctx.reply(JSON.stringify(saved_profile));
});

export default profiles;
