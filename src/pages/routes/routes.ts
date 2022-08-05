import template from './routes.hbs';
import './routes.css';

import {
  ROUTES_PAGE,
  LOGIN,
  REGISTER,
  NOT_FOUND,
  ERROR,
  // CHAT,
  PROFILE,
  CHANGE_PASSWORD,
} from '../../modules/routes';

export default () => {
  const data = {
    pages: [
      { title: 'Routes', url: ROUTES_PAGE },
      { title: 'Login', url: LOGIN },
      { title: 'Register', url: REGISTER },
      { title: 'Not Found', url: NOT_FOUND },
      { title: 'Error', url: ERROR },
      // { title: 'Chat', url: CHAT },
      { title: 'Pofile', url: PROFILE },
      { title: 'Change Password', url: CHANGE_PASSWORD },
    ],
  };

  const html = template(data);
  return html;
};
