/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './footer.tmpl';
import './footer.css';
import attach from '../../../../../public/paperclip-solid.svg';
import arrowRight from '../../../../../public/arrow-right-solid.svg';
import Block from '../../../../utils/Block';
import '../../../../colors.css';

class Footer extends Block {
  render() {
    return this.compile(template, {
      placeholder: this.props.placeholder,
      attachFiles: this.props.attachFiles,
      sendMessage: this.props.arrowRight,
    });
  }
}

const FooterComponent = new Footer('div', {
  placeholder: 'Сообщение',
  attachFiles: attach,
  sendMessage: arrowRight,
});

export default FooterComponent;

