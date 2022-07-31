import template from './header.hbs';
import './header.css';

export default () => {
  const data = {
    avatar: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
    nickname: 'Вадим',
    status: 'В сети',
  };

  const html = template(data);
  return html;
};
