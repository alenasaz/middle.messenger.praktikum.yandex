import template from "./error.hbs";
import "./error.css";

export default () => {
  let data = {
    status: "404",
    title: "Страница не найдена",
    goBackLink: "Назад к чатам",
  };

  let html = template(data);
  return html;
};
