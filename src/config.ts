import { config } from 'dotenv';
import path from 'path';

config({
	path: path.join(__dirname, '../../.env'),
});

const { BOT_TOKEN } = process.env;

if (!BOT_TOKEN) {
	throw new Error('No telegram bot token provided');
}

export { BOT_TOKEN };
