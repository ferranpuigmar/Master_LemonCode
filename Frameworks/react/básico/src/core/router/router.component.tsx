import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListPage } from "@src/scenes/list.page";
import { routes } from "@core/router";
import { LoginPage } from "@src/scenes/login.page";

export const RouterComponent = () => <Router>
  <Routes>
    <Route path={routes.list} element={<ListPage />} />
    <Route path={routes.login} element={<LoginPage />} />
    <Route path="*" element={<Navigate to={routes.login} />} />
  </Routes>
</Router>