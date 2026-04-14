import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { GalleryPageComponent } from './pages/gallery-page.component';
import { CrudPageComponent } from './pages/crud-page.component';
import { ProfilePageComponent } from './pages/profile-page.component';
import { redirectAuthenticatedToDashboardGuard, privateOnlyActivateChildGuard } from './auth/auth.guards';
import { GlobalLayoutComponent } from './layout/global-layout.component';

export const routes: Routes = [
	{
		path: '',
		component: GlobalLayoutComponent,
		children: [
			{ path: '', canActivate: [redirectAuthenticatedToDashboardGuard], component: HomePageComponent },
			{ path: 'login', canActivate: [redirectAuthenticatedToDashboardGuard], component: LoginPageComponent },
			{ path: 'acerca-de', component: AboutPageComponent }
		]
	},
	{
		path: '',
		canActivateChild: [privateOnlyActivateChildGuard],
		component: GlobalLayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{ path: 'dashboard', component: DashboardPageComponent },
			{ path: 'galeria', component: GalleryPageComponent },
			{ path: 'crud', component: CrudPageComponent },
			{ path: 'profile', component: ProfilePageComponent }
		]
	},
	{ path: '**', redirectTo: '' }
];
