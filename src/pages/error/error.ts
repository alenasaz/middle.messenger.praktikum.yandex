import template from './error.hbs';
import './error.css';

export default () => {
  const data = {
    status: '500',
    title: 'Ошибка сервера',
    goBackLink: 'Назад к чатам',
  };

  const html = template(data);
  return html;
};
