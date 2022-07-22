import template from "./chats.hbs";
import "./chats.css";
import header from "../searchHeader/searchHeader";
export default () => {
  let data = {
    header: header(),
    chats: [
      {
        chatName: "Андрей",
        message: {
          author: "Андрей",
          text: "Привет!",
        },
        imageSrc:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
      },
      {
        chatName: "Киноклуб",
        message: {
          author: "Вы",
          text: "Можно или сегодня или завтра вечером.",
        },
        imageSrc:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
      },
      {
        chatName: "Илья",
        message: {
          author: "Илья",
          text: "Друзья, у меня для вас особенный выпуск новостей!",
        },
        imageSrc:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
      },
      {
        chatName: "Вадим",
        message: {
          author: "Вы",
          text: "Круто!",
        },
        imageSrc:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
      },
    ],
  };

  let html = template(data);
  return html;
};
