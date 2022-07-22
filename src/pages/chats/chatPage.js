import template from "./chatPage.hbs";
import "./chatPage.css";
import messages from "./messages/messages";
import chats from "./chats/chats";

export default () => {
  let data = {
    chats: chats(),
    messages: messages(),
  };

  let html = template(data);
  return html;
};
