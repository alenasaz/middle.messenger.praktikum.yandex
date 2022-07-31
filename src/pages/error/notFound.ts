import template from './error.hbs';
import './error.css';

export default () => {
  const data = {
    status: '404',
    title: 'Страница не найдена',
    goBackLink: 'Назад к чатам',
  };

  const html = template(data);
  return html;
};
