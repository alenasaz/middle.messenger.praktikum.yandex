import template from "./footer.hbs";
import "./footer.css";
import attach from "../../../../../publuc/paperclip-solid.svg";
import arrowRight from "../../../../../publuc/arrow-right-solid.svg";
export default () => {
  let data = {
    placeholder: "Сообщение",
    attachFiles: attach,
    sendMessage: arrowRight,
  };

  let html = template(data);
  return html;
};
