import axios from "axios";
import telebot from "telebot";

const Wiki = (bot: telebot, msg: any, data: any) => {
  axios
    .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${data}`)
    .then((result) => {
      bot.sendMessage(
        msg.chat.id,
        `Este es el resultado de su busqueda:\n${result.data.extract}`
      );
    })
    .catch((err) => {
        bot.sendMessage(msg.chat.id, err.message)
    });
};

export default Wiki;
