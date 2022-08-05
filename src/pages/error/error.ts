import template from './error.tmpl.ts';
import './error.css';
import Block from '../../utils/Block';

// const data = {
//   status: '500',
//   title: 'Ошибка сервера',
//   goBackLink: 'Назад к чатам',
// };
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

// export default () => {
//   const data = {
//     status: '500',
//     title: 'Ошибка сервера',
//     goBackLink: 'Назад к чатам',
//   };

//   const html = template(data);
//   return html;
// };
