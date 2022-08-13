/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  ROUTES_PAGE,
  LOGIN,
  REGISTER,
  ERROR,
  NOT_FOUND,
  CHAT,
  PROFILE,
  CHANGE_PASSWORD,
} from './modules/routes';
import render from './utils/RenderDom';
import PageRoutes from './pages/routes/routes';
import PageLogin from './pages/login/login';
import PageNotFound from './pages/error/notFound';
import PageErorr from './pages/error/error';
import PageChat from './pages/chats/chatPage';
import PageChangePassword from './pages/changePassword/changePassword';
import PageUserProfile from './pages/userProfile/userProfile';
import PageRegistration from './pages/registration/registration';

const routes = {
  [ROUTES_PAGE]: PageRoutes,
  [LOGIN]: PageLogin,
  [PROFILE]: PageUserProfile,
  [NOT_FOUND]: PageNotFound,
  [ERROR]: PageErorr,
  [CHAT]: PageChat,
  [CHANGE_PASSWORD]: PageChangePassword,
  [REGISTER]: PageRegistration,
};

for (const [key, value] of Object.entries(routes)) {
  if (window.location.pathname === key) {
    render('.app', value);
  }
}

// const app = document.getElementById('app');
// app.innerHTML = routes[window.location.pathname]?.();
