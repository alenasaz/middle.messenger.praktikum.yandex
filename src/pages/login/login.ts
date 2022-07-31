import template from './login.hbs';
import './login.css';
import '../../components/button/button';
import '../../components/input/input';

export default () => {
  const data = {
    title: 'Вход',
    buttonText: 'Авторизоваться',
  };

  const html = template(data);
  return html;
};
