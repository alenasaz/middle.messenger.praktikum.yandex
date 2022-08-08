/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './registration.tmpl';
import './registration.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Validation from '../../utils/Validation';

const validation = new Validation();

class Registration extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
      events: this.props.events,
    });
  }
}

const PageRegistration = new Registration('div', {
  title: 'Регистрация',
  button: new Button('div', { buttonText: 'Зарегистировать' }),
  inputEmail: new Input('div', {
    name: 'email',
    placeholder: 'Почта',
    type: 'email',
    events: {
      blur: (event) => {
        if (event.target.name === 'email') {
          if (!validation.checkEmail(event.target.value)) {
            console.log('ошибка эмейл');
          }
        }
      },
    },
  }),
  inputLogin: new Input('div', {
    name: 'login',
    placeholder: 'Логин',
    type: 'text',
    events: {
      blur: (event) => {
        if (event.target.name === 'login') {
          if (!validation.checkLogin(event.target.value)) {
            console.log('ошибка логина');
          }
        }
      },
    },
  }),
  inputName: new Input('div', {
    name: 'first_name',
    placeholder: 'Имя',
    type: 'text',
    events: {
      blur: (event) => {
        if (event.target.name === 'first_name') {
          if (!validation.checkName(event.target.value)) {
            console.log('ошибка имя');
          }
        }
      },
    },
  }),
  inputPhone: new Input('div', {
    name: 'phone',
    placeholder: 'Телефон',
    type: 'text',
    events: {
      blur: (event) => {
        if (event.target.name === 'phone') {
          if (!validation.checkPhone(event.target.value)) {
            console.log('ошибка телефон');
          }
        }
      },
    },
  }),
  inputSecondName: new Input('div', {
    name: 'second_name',
    placeholder: 'Фамилия',
    type: 'text',
    events: {
      blur: (event) => {
        if (event.target.name === 'second_name') {
          if (!validation.checkName(event.target.value)) {
            console.log('ошибка фамилии');
          }
        }
      },
    },
  }),
  inputPassword: new Input('div', {
    name: 'password',
    placeholder: 'Пароль',
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
  inputRepeatPassword: new Input('div', {
    name: 'password_repeat',
    placeholder: 'Пароль (ещё раз)',
    type: 'password',
    events: {
      blur: (event) => {
        if (event.target.name === 'password_repeat') {
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
        if (current.name === 'password_repeat') {
          if (!validation.checkPassword(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'password') {
          if (!validation.checkPassword(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'second_name') {
          if (!validation.checkName(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'phone') {
          if (!validation.checkPhone(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'first_name') {
          if (!validation.checkName(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'login') {
          if (!validation.checkLogin(current.value)) {
            console.log('ошибка формы');
          }
        } else if (current.name === 'email') {
          if (!validation.checkEmail(current.value)) {
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

export default PageRegistration;

// export default () => {
//   const data = {
//     title: 'Регистрация',
//     buttonText: 'Зарегистировать',
//     buttonSecondaryText: 'Войти',
//   };

//   const html = template(data);
//   return html;
// };
