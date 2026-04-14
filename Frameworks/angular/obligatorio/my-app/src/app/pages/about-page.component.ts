import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <section class="page">
      <h1>Acerca de</h1>
      <p>Esta pagina muestra informacion estatica sobre la aplicacion y su proposito.</p>
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
export class AboutPageComponent {}
