import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './components/app-footer.component';
import { AppHeaderComponent } from './components/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFooterComponent, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lemon Frameworks';
}
