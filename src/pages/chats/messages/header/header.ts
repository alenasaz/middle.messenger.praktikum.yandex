/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './header.tmpl';
import './header.css';
import Block from '../../../../utils/Block';
import '../../../../colors.css';

interface IHeader {
  avatar: string;
  nickname: string;
  status: string;
}

class Header extends Block {
  constructor(props: IHeader) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      avatar: this.props.avatar,
      nickname: this.props.nickname,
      status: this.props.status,
    });
  }
}

const HeaderComponent = new Header({
  avatar: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
  nickname: 'Вадим',
  status: 'В сети',
});

export default HeaderComponent;
