import telebot from "telebot";
import Wiki from "./components/wiki";

const bot = new telebot({
  token: "2089823290:AAGgDfYZjZqpTM6p_eHwsF75lDicugmyIL8",
});

bot.on("/start", (msg) => {
  return bot.sendMessage(msg.chat.id, `Saludos ${msg.chat.first_name}`);
});

bot.on(/^\/wiki (.+)$/, (msg, prop) => {
  const text = prop.match[1];
  Wiki(bot, msg, text);
});

bot.start();
