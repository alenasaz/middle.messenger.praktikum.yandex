import template from './chatPage.hbs';
import './chatPage.css';
import messages from './messages/messages';
import chats from './chats/chats';

export default () => {
  const data = {
    chats: chats(),
    messages: messages(),
  };

  const html = template(data);
  return html;
};
