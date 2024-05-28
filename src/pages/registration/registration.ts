/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './registration.tmpl';
import './registration.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Validation from '../../utils/Validation';
import '../../colors.css';

const validation = new Validation();

interface IRegistration {
  title: string;
  events: { submit: (e: Event) => void };
}

class Registration extends Block {
  constructor(props: IRegistration) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      events: this.props.events,
    });
  }
}

const PageRegistration = new Registration({
  title: 'Регистрация',
  button: new Button({ buttonText: 'Зарегистировать' }),
  inputEmail: new Input({
    name: 'email',
    placeholder: 'Почта',
    type: 'email',
    id: 'email',
    events: {
      blur: (event) => {
        if (event.target.name === 'email') {
          if (!validation.checkEmail(event.target.value)) {
            validation.showError(event.target, 'email');
          } else {
            validation.hideError(event.target, 'email');
          }
        }
      },
    },
  }),
  inputLogin: new Input({
    name: 'login',
    placeholder: 'Логин',
    type: 'text',
    id: 'login_registration',
    events: {
      blur: (event) => {
        if (event.target.name === 'login') {
          if (!validation.checkLogin(event.target.value)) {
            validation.showError(event.target, 'login_registration');
          } else {
            validation.hideError(event.target, 'login_registration');
          }
        }
      },
    },
  }),
  inputName: new Input({
    name: 'first_name',
    placeholder: 'Имя',
    type: 'text',
    id: 'first_name',
    events: {
      blur: (event) => {
        if (event.target.name === 'first_name') {
          if (!validation.checkName(event.target.value)) {
            validation.showError(event.target, 'first_name');
          } else {
            validation.hideError(event.target, 'first_name');
          }
        }
      },
    },
  }),
  inputPhone: new Input({
    name: 'phone',
    placeholder: 'Телефон',
    type: 'text',
    id: 'phone',
    events: {
      blur: (event) => {
        if (event.target.name === 'phone') {
          if (!validation.checkPhone(event.target.value)) {
            validation.showError(event.target, 'phone');
          } else {
            validation.hideError(event.target, 'phone');
          }
        }
      },
    },
  }),
  inputSecondName: new Input({
    name: 'second_name',
    placeholder: 'Фамилия',
    type: 'text',
    id: 'second_name',
    events: {
      blur: (event) => {
        if (event.target.name === 'second_name') {
          if (!validation.checkName(event.target.value)) {
            validation.showError(event.target, 'second_name');
          } else {
            validation.hideError(event.target, 'second_name');
          }
        }
      },
    },
  }),
  inputPassword: new Input({
    name: 'password',
    placeholder: 'Пароль',
    type: 'password',
    id: 'password_registration',
    events: {
      blur: (event) => {
        if (event.target.name === 'password') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'password_registration');
          } else {
            validation.hideError(event.target, 'password_registration');
          }
        }
      },
    },
  }),
  inputRepeatPassword: new Input({
    name: 'password_repeat',
    placeholder: 'Пароль (ещё раз)',
    type: 'password',
    id: 'password_repeat_registration',
    events: {
      blur: (event) => {
        if (event.target.name === 'password_repeat') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'password_repeat_registration');
          } else {
            validation.hideError(event.target, 'password_repeat_registration');
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
