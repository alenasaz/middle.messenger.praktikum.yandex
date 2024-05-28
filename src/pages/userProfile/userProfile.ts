import template from './userProfile.tmpl';
import './userProfile.css';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Text from '../../components/text/text';
import '../../colors.css';

interface IUserProfile {
  imageSrc: string,
  firstName: string,
}

class UserProfile extends Block {
  constructor(props: IUserProfile) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      imageSrc: this.props.imageSrc,
      firstName: this.props.firstName,
    });
  }
}

const PageUserProfile = new UserProfile({
  imageSrc: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
  firstName: 'Тест тестович',
  button: new Button({ buttonText: 'Сохранить' }),
  textEmail: new Text({ currentValue: 'pochta@gmail.ru', fieldName: 'email' }),
  textLogin: new Text({ currentValue: 'ivanivanov', fieldName: 'login' }),
  textSecondName: new Text({ currentValue: 'Иванов', fieldName: 'second_name' }),
  textChatName: new Text({ currentValue: 'Иван', fieldName: 'display_name' }),
  textPhone: new Text({ currentValue: '7(903)-967-30-30', fieldName: 'phone' }),
});

export default PageUserProfile;
