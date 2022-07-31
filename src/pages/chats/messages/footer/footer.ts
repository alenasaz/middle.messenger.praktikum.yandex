import template from './footer.hbs';
import './footer.css';
import attach from '../../../../../publuc/paperclip-solid.svg';
import arrowRight from '../../../../../publuc/arrow-right-solid.svg';

export default () => {
  const data = {
    placeholder: 'Сообщение',
    attachFiles: attach,
    sendMessage: arrowRight,
  };

  const html = template(data);
  return html;
};
