import template from "./searchHeader.hbs";
import "./searchHeader.css";
import searchIcon from "../../../../publuc/magnifying-glass-solid.svg";

export default () => {
  let data = {
    menuIcon: searchIcon,
  };

  let html = template(data);
  return html;
};
