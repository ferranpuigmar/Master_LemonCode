import { Component, inject } from "@angular/core";
import { AppLogoComponent } from "./app-logo.component";
import { AuthService } from "../auth/auth.service";
import { PrivateMenuComponent } from "./private-menu.component";
import { PublicMenuComponent } from "./public-menu.component";
import { AppLoggedInfoComponent } from "./app-logged-info.component";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [AppLogoComponent, PrivateMenuComponent, PublicMenuComponent, AppLoggedInfoComponent],
    template: `
        <header>
            <div class="container">
                <div class="header-content">
                    <app-logo></app-logo>
                    @if (isLoggedIn) {
                        <app-private-menu></app-private-menu>
                    } @else {
                        <app-public-menu></app-public-menu>
                    }
                    @if (isLoggedIn) {
                        <app-logged-info></app-logged-info>
                    }
                </div>
            </div>
        </header>
    `,
    styles: `
        header {
            background-color: var(--primary-color-light);
            padding: 1rem;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `
})
export class AppHeaderComponent {
    private authService = inject(AuthService);

    isLoggedIn = this.authService.isLogged();
}