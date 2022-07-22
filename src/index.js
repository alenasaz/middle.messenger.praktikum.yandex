import {
  ROUTES_PAGE,
  LOGIN,
  REGISTER,
  ERROR,
  NOT_FOUND,
  CHAT,
  PROFILE,
  CHANGE_PASSWORD,
} from "../src/modules/routes";

import routesPage from "./pages/routes/routes";
import loginPage from "./pages/login/login";
import notFoundPage from "./pages/error/notFound";
import errorPage from "./pages/error/error";
import chatPage from "./pages/chats/chatPage";
import changePasswordPage from "./pages/changePassword/changePassword";
import profilePage from "./pages/userProfile/userProfile";
import registrationPage from "./pages/registration/registration";

const routes = {
  [ROUTES_PAGE]: routesPage,
  [LOGIN]: loginPage,
  [PROFILE]: profilePage,
  [NOT_FOUND]: notFoundPage,
  [ERROR]: errorPage,
  [CHAT]: chatPage,
  [CHANGE_PASSWORD]: changePasswordPage,
  [REGISTER]: registrationPage,
};

const app = document.getElementById("app");
app.innerHTML = routes[window.location.pathname]?.();
