import React from "react";

interface Props {
  onLogin: (username: string, password: string) => void;
}

export const LoginComponent = (props: Props) => {
  const { onLogin } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleNavigation}>
      <div className="login-container">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </div>
    </form>
  );
};
