import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListGithubPage } from "@src/scenes/listGithub.page";
import { switchRoutes } from "@core/router";
import { DetailRymPage } from "@src/scenes/detailRym.page";
import { ListRyMPage } from "@src/scenes/listRym.page";
import { DetailGithubPage } from "@src/scenes/detailGithub.page";
import ResponsiveAppBar from "@src/common/components/app-bar/app-bar";
import { Box } from "@mui/material";

export const RouterComponent = () => <Router>
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <ResponsiveAppBar />
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Routes>
        <Route path={switchRoutes.listGithub} element={<ListGithubPage />} />
        <Route path={switchRoutes.listRym} element={<ListRyMPage />} />
        <Route path={switchRoutes.detailsGithub} element={<DetailGithubPage />} />
        <Route path={switchRoutes.detailsRym} element={<DetailRymPage />} />
        <Route path="*" element={<Navigate to={switchRoutes.listGithub} />} />
      </Routes>
    </Box>
  </Box>
</Router>