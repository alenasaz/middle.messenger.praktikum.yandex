/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './messages.tmpl';
import './messages.css';
import FooterComponent from './footer/footer';
import HeaderComponent from './header/header';
import Block from '../../../utils/Block';

class Messages extends Block {
  render() {
    return this.compile(template, {
      header: this.props.header,
      footer: this.props.footer,
      messages: this.props.messages,
    });
  }
}

const MessagesComponent = new Messages('div', {
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

// export default () => {
//   const data = {
//     header: header(),
//     footer: footer(),
//     messages: [
//       {
//         author: 'Андрей',
//         text: 'О-ля-ля, какие люди',
//       },
//       {
//         author: null,
//         text: 'Привет!',
//       },
//       {
//         author: 'Андрей',
//         text: 'Привет!',
//       },
//     ],
//   };

//   const html = template(data);
//   return html;
// };
