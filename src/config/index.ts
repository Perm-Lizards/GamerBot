import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

export const { BOT_TOKEN, WEB_APP_HOST } = process.env;
