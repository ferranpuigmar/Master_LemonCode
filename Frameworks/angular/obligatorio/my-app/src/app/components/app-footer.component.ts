import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>2026 Lemon Frameworks - Ejercicio Angular.</p>
        <p>Contenido estatico de pie de pagina.</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        margin-top: 1rem;
        border-top: 1px solid #dee2e6;
        padding-top: 1rem;
        color: #495057;
        font-size: 0.9rem;
      }

      p {
        margin: 0.25rem 0;
      }
    `
  ]
})
export class AppFooterComponent {}
