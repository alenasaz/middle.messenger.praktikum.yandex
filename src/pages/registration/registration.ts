import template from './registration.tmpl.ts';
import './registration.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/text/text';

class Registration extends Block {
  render() {
    return this.compile(template, {
      title: this.props.title,
    });
  }
}

const PageRegistration= new Registration('div', {
  title: 'Регистрация',
  button: new Button('div', { buttonText: 'Зарегистировать' }),
  inputEmail: new Input('div', { name: 'email', placeholder: 'Почта', type: 'email' }),
  inputLogin: new Input('div', { name: 'login', placeholder: 'Логин', type: 'text' }),
  inputName: new Input('div', { name: 'first_name', placeholder: 'Имя', type: 'text' }),
  inputSecondName: new Input('div', { name: 'second_name', placeholder: 'Фамилия', type: 'password' }),
  inputRepeatPassword: new Input('div', { name: 'password_repeat', placeholder: 'Пароль (ещё раз)', type: 'password' }),
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
