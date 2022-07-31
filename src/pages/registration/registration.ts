import template from './registration.hbs';
import './registration.css';
import '../../components/button/button';
import '../../components/input/input';

export default () => {
  const data = {
    title: 'Регистрация',
    buttonText: 'Зарегистировать',
    buttonSecondaryText: 'Войти',
  };

  const html = template(data);
  return html;
};
