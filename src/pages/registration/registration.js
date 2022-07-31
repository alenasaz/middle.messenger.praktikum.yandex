import template from "./registration.hbs";
import "./registration.css";
import "../../components/button/button";
import "../../components/input/input";

export default () => {
  let data = {
    title: "Регистрация",
    buttonText: "Зарегистировать",
    buttonSecondaryText: "Войти",
  };

  let html = template(data);
  return html;
};
