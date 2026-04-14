import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  template: `
    <section class="page">
      <h1>Galeria</h1>
      <p>Seccion de galeria para usuarios autenticados.</p>
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
export class GalleryPageComponent {}
