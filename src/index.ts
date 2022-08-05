import {
  ROUTES_PAGE,
  LOGIN,
  REGISTER,
  ERROR,
  NOT_FOUND,
  // CHAT,
  PROFILE,
  CHANGE_PASSWORD,
} from './modules/routes';
import render from './utils/RenderDom';
import routesPage from './pages/routes/routes';
import PageLogin from './pages/login/login.ts';
import PageNotFound from './pages/error/notFound.ts';
import PageErorr from './pages/error/error.ts';
// import chatPage from "./pages/chats/chatPage";
import PageChangePassword from './pages/changePassword/changePassword.ts';
import PageUserProfile from "./pages/userProfile/userProfile.ts";
import PageRegistration from "./pages/registration/registration.ts";

const routes = {
  [ROUTES_PAGE]: routesPage,
  [LOGIN]: render('.app', PageLogin),
  [PROFILE]: render('.app', PageUserProfile),
  [NOT_FOUND]: render('.app', PageNotFound),
  [ERROR]: render('.app', PageErorr),
  // [CHAT]: chatPage,
  [CHANGE_PASSWORD]: render('.app', PageChangePassword),
  [REGISTER]: render('.app', PageRegistration)
};

const app = document.getElementById('app');
app.innerHTML = routes[window.location.pathname]?.();
