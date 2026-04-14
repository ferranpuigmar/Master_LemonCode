import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/galeria" routerLinkActive="active">Galeria</a>
      <a routerLink="/crud" routerLinkActive="active">CRUD</a>
      <a routerLink="/profile" routerLinkActive="active">Profile</a>
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
export class PrivateMenuComponent {}
