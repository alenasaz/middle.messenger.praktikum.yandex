import template from './messages.hbs';
import './messages.css';
import footer from './footer/footer';
import header from './header/header';

export default () => {
  const data = {
    header: header(),
    footer: footer(),
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
  };

  const html = template(data);
  return html;
};
