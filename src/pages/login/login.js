import template from "./login.hbs";
import "./login.css";
import "../../components/button/button";
import "../../components/input/input";

export default () => {
  let data = {
    title: "Вход",
    buttonText: "Авторизоваться",
  };

  let html = template(data);
  return html;
};
