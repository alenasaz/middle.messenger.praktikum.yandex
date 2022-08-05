import template from './changePassword.tmpl.ts';
import './changePassword.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button.ts';
import Input from '../../components/input/input';

class ChangePassword extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
    });
  }
}

const PageChangePassword = new ChangePassword('div', {
  title: 'Изменить пароль',
  button: new Button('div', { buttonText: 'Изменить пароль' }),
  inputOldPassword: new Input('div', { name: 'old_password', placeholder: 'Старый пароль', type: 'password' }),
  inputNewPassword: new Input('div', { name: 'password', placeholder: 'Новый пароль', type: 'password' }),
  inputRepeatNewPassword: new Input('div', { name: 'repeat_password', placeholder: 'Повторите новый пароль', type: 'password' }),
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
