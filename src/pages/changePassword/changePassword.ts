/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './changePassword.tmpl';
import './changePassword.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Validation from '../../utils/Validation';

const validation = new Validation();

class ChangePassword extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
      events: this.props.events,
    });
  }
}

const PageChangePassword = new ChangePassword('div', {
  title: 'Изменить пароль',
  button: new Button('div', { buttonText: 'Изменить пароль' }),
  inputOldPassword: new Input('div', {
    name: 'old_password',
    placeholder: 'Старый пароль',
    type: 'password',
    events: {
      blur: (event) => {
        if (event.target.name === 'old_password') {
          if (!validation.checkPassword(event.target.value)) {
            console.log('ошибка пароля');
          }
        }
      },
    },
  }),
  inputNewPassword: new Input('div', {
    name: 'password',
    placeholder: 'Новый пароль',
    type: 'password',
    events: {
      blur: (event) => {
        if (event.target.name === 'password') {
          if (!validation.checkPassword(event.target.value)) {
            console.log('ошибка пароля');
          }
        }
      },
    },
  }),
  inputRepeatNewPassword: new Input('div', {
    name: 'repeat_password',
    placeholder: 'Повторите новый пароль',
    type: 'password',
    events: {
      blur: (event) => {
        if (event.target.name === 'repeat_password') {
          if (!validation.checkPassword(event.target.value)) {
            console.log('ошибка пароля');
          }
        }
      },
    },
  }),
  events: {
    // вывожу данные в консоль при нажатии на кнопку
    submit: (event) => {
      event.preventDefault();
      const inputFields = event.target.querySelectorAll('input');
      const data = {};
      inputFields.forEach((current) => {
        console.log('current', current);
        data[current.name] = current.value;
      });
      console.log('data', data);
    },
  },
});

export default PageChangePassword;

// export default () => {
//   const data = {
//     buttonText: 'Сохранить',
//     title: 'Изменить пароль',
//   };
//   const html = template(data);
//   return html;
// };
