import template from "./userProfile.hbs";
import "./userProfile.css";
import "../../components/button/button";
import "../../components/text/text";

export default () => {
  let data = {
    buttonText: "Сохранить",
    imageSrc: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
  };
  let html = template(data);
  return html;
};
