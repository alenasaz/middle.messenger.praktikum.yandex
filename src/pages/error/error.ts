/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './error.tmpl';
import './error.css';
import Block from '../../utils/Block';

interface IError {
  status: string,
  title: string,
  goBackLink: string,
}

class Error extends Block {
  constructor(props: IError) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      status: this.props.status,
      title: this.props.title,
      goBackLink: this.props.goBackLink,
    });
  }
}

const PageErorr = new Error({
  status: '500',
  title: 'Ошибка сервера',
  goBackLink: 'Назад к чатам',
});
export default PageErorr;
