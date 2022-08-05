import template from './userProfile.tmpl.ts';
import './userProfile.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Text from '../../components/text/text';

class UserProfile extends Block {
  render() {
    return this.compile(template, {
      imageSrc: this.props.imageSrc,
      firstName: this.props.firstName,
    });
  }
}

const PageUserProfile = new UserProfile('div', {
  imageSrc: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
  firstName: 'Тест тестович',
  button: new Button('div', { buttonText: 'Сохранить' }),
  textEmail: new Text('div', { currentValue: 'pochta@gmail.ru', fieldName: 'email' }),
  textLogin: new Text('div', { currentValue: 'ivanivanov', fieldName: 'login' }),
  textSecondName: new Text('div', { currentValue: 'Иванов', fieldName: 'second_name' }),
  textChatName: new Text('div', { currentValue: 'Иван', fieldName: 'display_name' }),
  textPhone: new Text('div', { currentValue: '7(903)-967-30-30', fieldName: 'phone' }),
});

export default PageUserProfile;

// export default () => {
//   const data = {
//     buttonText: 'Сохранить',
//     imageSrc: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
//   };
//   const html = template(data);
//   return html;
// };
