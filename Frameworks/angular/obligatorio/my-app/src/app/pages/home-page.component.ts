import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="page">
      <h1>Home</h1>
      <p>Bienvenido a la aplicacion de ejemplo con menu publico y menu privado.</p>
    </section>
  `,
  styles: [
    `
      .page {
        background: #fff;
        border: 1px solid #dee2e6;
        border-radius: 12px;
        padding: 1.2rem;
      }

      h1 {
        margin-top: 0;
      }
    `
  ]
})
export class HomePageComponent {}
