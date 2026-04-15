import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <section>
      <h1>Acerca de</h1>
      <p>Esta pagina muestra informacion estatica sobre la aplicacion y su proposito.</p>
    </section>
  `,
  styles: ''
})
export class AboutPageComponent {}
