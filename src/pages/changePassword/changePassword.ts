/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './changePassword.tmpl';
import './changePassword.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Validation from '../../utils/Validation';
import '../../colors.css';

const validation = new Validation();

interface IChangePassword {
  title?: string;
  events: { submit: (e: Event) => void };
}

class ChangePassword extends Block {
  constructor(props: IChangePassword) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      events: this.props.events,
    });
  }
}

const PageChangePassword = new ChangePassword({
  title: 'Изменить пароль',
  button: new Button({ buttonText: 'Изменить пароль' }),
  inputOldPassword: new Input({
    name: 'old_password',
    placeholder: 'Старый пароль',
    type: 'password',
    id: 'old_password',
    events: {
      blur: (event) => {
        if (event.target.name === 'old_password') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'old_password');
          } else {
            validation.hideError(event.target, 'old_password');
          }
        }
      },
    },
  }),
  inputNewPassword: new Input({
    name: 'password',
    placeholder: 'Новый пароль',
    type: 'password',
    id: 'password_change',
    events: {
      blur: (event) => {
        if (event.target.name === 'password') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'password_change');
          } else {
            validation.hideError(event.target, 'password_change');
          }
        }
      },
    },
  }),
  inputRepeatNewPassword: new Input({
    name: 'repeat_password',
    placeholder: 'Повторите новый пароль',
    type: 'password',
    id: 'repeat_password',
    events: {
      blur: (event) => {
        if (event.target.name === 'repeat_password') {
          if (!validation.checkPassword(event.target.value)) {
            validation.showError(event.target, 'repeat_password');
          } else {
            validation.hideError(event.target, 'repeat_password');
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
