import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./components/welcome.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-nav-bar />
    <main class="container mx-auto">
    </main>
  `,
    styles: [],
    imports: [RouterOutlet, WelcomeComponent, NavBarComponent]
})
export class AppComponent {}
