/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './messages.tmpl';
import './messages.css';
import FooterComponent from './footer/footer';
import HeaderComponent from './header/header';
import Block from '../../../utils/Block';

interface IMessages {
  messages: Array<{}>;
  header: unknown;
  footer: unknown;
}

class Messages extends Block {
  constructor(props: IMessages) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      header: this.props.header,
      footer: this.props.footer,
      messages: this.props.messages,
    });
  }
}

const MessagesComponent = new Messages({
  header: HeaderComponent,
  footer: FooterComponent,
  messages: [
    {
      author: 'Андрей',
      text: 'О-ля-ля, какие люди',
    },
    {
      author: null,
      text: 'Привет!',
    },
    {
      author: 'Андрей',
      text: 'Привет!',
    },
  ],
});

export default MessagesComponent;
