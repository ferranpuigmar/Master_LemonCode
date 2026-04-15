import { Component } from '@angular/core';
import { AppGalleryComponent } from '../components/app-gallery/app-gallery.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [AppGalleryComponent],
  template: `
    <section>
      <app-gallery></app-gallery>
    </section>
  `,
  styles: ''
})
export class GalleryPageComponent {}
