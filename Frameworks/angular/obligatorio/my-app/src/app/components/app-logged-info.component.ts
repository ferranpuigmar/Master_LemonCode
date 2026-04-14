import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-logged-info',
    standalone: true,
    template: `
        <div class="logged-info">
            <div class="logged-info__avatar">{{ username?.charAt(0)?.toUpperCase() }}</div>
            <div class="logged-info__content">
                <p>{{ username }}</p>
                <button class="btn btn-link" (click)="logout()">Cerrar sesión</button>
            </div>
        </div>
    `,
    styles: [
        `
        .logged-info {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 0.5rem;

            .logged-info__avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: var(--primary-color);
                color: var(--text-color);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }

            p {
                margin: 0;
                font-size: 0.9rem;
                font-weight: 600;
            }
        }

        .btn-link {
            padding: 0;
            border: none;
            background: none;
            color: var(--text-color);
            cursor: pointer;
            text-decoration: underline;
            font-size: 0.75rem;
        }

        .btn-link:hover {
            text-decoration: underline;
        }
        `
    ]
})
export class AppLoggedInfoComponent {
    private authService = inject(AuthService);
    private router = inject(Router);
    username = this.authService.getUsername();

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}