/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './routes.tmpl.ts';
import './routes.css';
import Block from '../../utils/Block';
import {
  ROUTES_PAGE,
  LOGIN,
  REGISTER,
  NOT_FOUND,
  ERROR,
  CHAT,
  PROFILE,
  CHANGE_PASSWORD,
} from '../../modules/routes';
import '../../colors.css';

interface IRoutes {
  pages?: Array<{}>;
}

class Routes extends Block {
  constructor(props: IRoutes) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      pages: this.props.pages,
    });
  }
}

const PageRoutes = new Routes({
  pages: [
    { title: 'Routes', url: ROUTES_PAGE },
    { title: 'Login', url: LOGIN },
    { title: 'Register', url: REGISTER },
    { title: 'Not Found', url: NOT_FOUND },
    { title: 'Error', url: ERROR },
    { title: 'Chat', url: CHAT },
    { title: 'Pofile', url: PROFILE },
    { title: 'Change Password', url: CHANGE_PASSWORD },
  ],
});

export default PageRoutes;
