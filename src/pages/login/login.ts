import template from './login.tmpl.ts';
import './login.css';
// import '../../components/input/input';
import Block from '../../utils/Block';
import Button from '../../components/button/button.ts';
import Input from '../../components/input/input';

class Login extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
    });
  }
}

const PageLogin = new Login('div', {
  title: 'Вход',
  button: new Button('div', { buttonText: 'Авторизоваться' }),
  inputPassword: new Input('div', { name: 'password', placeholder: 'Пароль', type: 'password' }),
  inputLogin: new Input('div', { name: 'login', placeholder: 'Логин', type: 'text' })
});

export default PageLogin;
