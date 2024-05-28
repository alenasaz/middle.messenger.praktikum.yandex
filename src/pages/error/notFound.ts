/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './error.tmpl';
import './error.css';
import Block from '../../utils/Block';

interface INotFound {
  status: string,
  title: string,
  goBackLink: string,
}

class ErrorNew extends Block {
  constructor(props: INotFound) {
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

const PageNotFound = new ErrorNew({
  status: '404',
  title: 'Страница не найдена',
  goBackLink: 'Назад к чатам',
});
export default PageNotFound;
