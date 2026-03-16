interface SwitchRoutes {
  list: string;
  login: string;
}

export const switchRoutes: SwitchRoutes = {
  list: "/list",
  login: "/login"
};

export const routes: SwitchRoutes = {
  ...switchRoutes
};