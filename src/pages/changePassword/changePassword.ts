import template from './changePassword.hbs';
import './changePassword.css';
import '../../components/button/button';

export default () => {
  const data = {
    buttonText: 'Сохранить',
    title: 'Изменить пароль',
  };
  const html = template(data);
  return html;
};
