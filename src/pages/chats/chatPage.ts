/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './chatPage.tmpl';
import './chatPage.css';
import MessagesComponent from './messages/messages';
import ChatComponent from './chats/chats';
import Block from '../../utils/Block';
import '../../colors.css';

class Chat extends Block {
  render() {
    return this.compile(template, {
      chats: this.props.chats,
      messages: this.props.messages,
    });
  }
}

const PageChat = new Chat('div', {
  chats: ChatComponent,
  messages: MessagesComponent,
});

export default PageChat;

