/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './chats.tmpl';
import './chats.css';
import SearchHeaderComponent from '../searchHeader/searchHeader';
import Block from '../../../utils/Block';
import '../../../colors.css';

interface IChat {
  chats: Array<{}>;
  header: unknown;
}

class Chat extends Block {
  constructor(props: IChat) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      chats: this.props.chats,
      header: this.props.header,
    });
  }
}

const ChatComponent = new Chat({
  chats: [
    {
      chatName: 'Андрей',
      message: {
        author: 'Андрей',
        text: 'Привет!',
      },
      imageSrc:
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
    },
    {
      chatName: 'Киноклуб',
      message: {
        author: 'Вы',
        text: 'Можно или сегодня или завтра вечером.',
      },
      imageSrc:
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
    },
    {
      chatName: 'Илья',
      message: {
        author: 'Илья',
        text: 'Друзья, у меня для вас особенный выпуск новостей!',
      },
      imageSrc:
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
    },
    {
      chatName: 'Вадим',
      message: {
        author: 'Вы',
        text: 'Круто!',
      },
      imageSrc:
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
    },
  ],
  header: SearchHeaderComponent,
});

export default ChatComponent;
