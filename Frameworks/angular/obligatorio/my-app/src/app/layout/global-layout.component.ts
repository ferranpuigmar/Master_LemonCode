import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from '../components/app-footer.component';
import { AppHeaderComponent } from '../components/app-header.component';

@Component({
    selector: 'app-global-layout',
    standalone: true,
    imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent],
    template: `
       <app-header></app-header>

        <section class="container">
            <div class="content">
                <router-outlet />
            </div>
        </section>
  `,
})
export class GlobalLayoutComponent { }
