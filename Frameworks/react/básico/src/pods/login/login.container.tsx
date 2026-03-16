import { useNavigate } from "react-router-dom";
import { routes } from "@core/router";
import {LoginComponent} from './login.component';

export const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <LoginComponent onLogin={handleLogin} />;
};
