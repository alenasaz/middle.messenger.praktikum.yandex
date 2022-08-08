/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './error.tmpl';
import './error.css';
import Block from '../../utils/Block';

// const data = {
// status: '404',
// title: 'Страница не найдена',
// goBackLink: 'Назад к чатам',
// };
class ErrorNew extends Block {
  render() {
    return this.compile(template, {
      status: this.props.status,
      title: this.props.title,
      goBackLink: this.props.goBackLink,
    });
  }
}

const PageNotFound = new ErrorNew('div', {
  status: '404',
  title: 'Страница не найдена',
  goBackLink: 'Назад к чатам',
});
export default PageNotFound;

// export default () => {
//   const data = {
//     status: '404',
//     title: 'Страница не найдена',
//     goBackLink: 'Назад к чатам',
//   };

//   const html = template(data);
//   return html;
// };
