/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './error.tmpl';
import './error.css';
import Block from '../../utils/Block';

class Error extends Block {
  render() {
    return this.compile(template, {
      status: this.props.status,
      title: this.props.title,
      goBackLink: this.props.goBackLink,
    });
  }
}

const PageErorr = new Error('div', {
  status: '500',
  title: 'Ошибка сервера',
  goBackLink: 'Назад к чатам',
});
export default PageErorr;
