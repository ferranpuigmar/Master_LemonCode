import { Component } from "@angular/core";

@Component({
    selector: 'app-logo',
    standalone: true,
    template: `
        <div class="logo">
            <img src="assets/logo-lemon.webp" alt="Lemon Frameworks Logo">
        </div>
    `
})
export class AppLogoComponent {}