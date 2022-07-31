import template from "./error.hbs";
import "./error.css";

export default () => {
  let data = {
    status: "500",
    title: "Ошибка сервера",
    goBackLink: "Назад к чатам",
  };

  let html = template(data);
  return html;
};
