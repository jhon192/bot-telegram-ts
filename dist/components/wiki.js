"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Wiki = function (bot, msg, data) {
    axios_1.default
        .get("https://en.wikipedia.org/api/rest_v1/page/summary/" + data)
        .then(function (result) {
        bot.sendMessage(msg.chat.id, "Este es el resultado de su busqueda:\n" + result.data.extract);
    })
        .catch(function (err) {
        bot.sendMessage(msg.chat.id, err.message);
    });
};
exports.default = Wiki;
