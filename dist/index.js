"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telebot_1 = __importDefault(require("telebot"));
var wiki_1 = __importDefault(require("./components/wiki"));
var bot = new telebot_1.default({
    token: "2089823290:AAGgDfYZjZqpTM6p_eHwsF75lDicugmyIL8",
});
bot.on("/start", function (msg) {
    return bot.sendMessage(msg.chat.id, "Saludos " + msg.chat.first_name);
});
bot.on(/^\/wiki (.+)$/, function (msg, prop) {
    var text = prop.match[1];
    (0, wiki_1.default)(bot, msg, text);
});
bot.start();
