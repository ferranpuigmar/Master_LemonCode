import { generatePath } from "react-router-dom";
import { slug } from "./source";

interface SwitchRoutes {
  listGithub: string;
  listRym: string;
  login: string;
  detailsRym: string;
  detailsGithub: string;
}

export const switchRoutes: SwitchRoutes = {
  listGithub: `/${slug.github}`,
  listRym: `/${slug.rickAndMorty}`,
  login: "/login",
  detailsRym: `/${slug.rickAndMorty}/detail/:id`,
  detailsGithub: `/${slug.github}/detail/:id`,
};

export interface Routes extends Omit<SwitchRoutes, "detailsRym" | "detailsGithub"> {
  detailsRym: (id: string) => string;
  detailsGithub: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detailsRym: (id) => generatePath(switchRoutes.detailsRym, { id }),
  detailsGithub: (id) => generatePath(switchRoutes.detailsGithub, { id }),
};
