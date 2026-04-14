import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/acerca-de" routerLinkActive="active">Acerca de</a>
    </nav>
  `,
  styles: [
    `
      .menu {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      a {
        text-decoration: none;
        padding: 0.5rem 0.8rem;
        border-radius: var(--border-radius);
        color: var(--text-color);
        font-weight: 500;

        &:hover {
          background: var(--primary-color);
        }
      }

      a.active {
        background: var(--primary-color);
        color: var(--text-color);
      }
    `
  ]
})
export class PublicMenuComponent {}
