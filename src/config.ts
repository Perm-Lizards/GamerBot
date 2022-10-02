import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../.env'),
});

const { BOT_TOKEN } = process.env;

if (!(BOT_TOKEN ?? false)) {
  throw new Error('No telegram bot token provided');
}

export { BOT_TOKEN };