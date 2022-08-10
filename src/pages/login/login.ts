/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import template from './login.tmpl';
import './login.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Validation from '../../utils/Validation';
import '../../colors.css';

const validation = new Validation();

class Login extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
      events: this.props.events,
    });
  }
}

const PageLogin = new Login('div', {
  title: 'Вход',
  button: new Button('div', { buttonText: 'Авторизоваться' }),
  inputPassword: new Input('div', {
    name: 'password',
    id: 'password_login',
    placeholder: 'Пароль',
    type: 'password',
    events: {
      blur: (event) => {
        if (event.target.name === 'password') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'password_login');
          } else {
            validation.hideError(event.target, 'password_login');
          }
        }
      },
    },
  }),
  inputLogin: new Input('div', {
    name: 'login',
    placeholder: 'Логин',
    type: 'text',
    id: 'login_login',
    events: {
      blur: (event) => {
        if (event.target.name === 'login') {
          if (!validation.checkLogin(event.target.value)) {
            validation.showError(event.target, 'login_login');
          } else {
            validation.hideError(event.target, 'login_login');
          }
        }
      },
    },
  }),
  events: {
    submit: (event) => {
      event.preventDefault();
      const inputFields = event.target.querySelectorAll('input');
      const data = {};
      inputFields.forEach((current) => {
        if (current.name === 'login') {
          if (!validation.checkLogin(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'password') {
          if (!validation.checkPassword(current.value)) {
            console.log('ошибка формы');
          }
        } else {
          console.log('current', current);
          data[current.name] = current.value;
        }
      });
      console.log('data', data);
    },
  },

});

export default PageLogin;
