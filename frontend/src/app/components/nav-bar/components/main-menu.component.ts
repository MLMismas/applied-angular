import { Component, input } from '@angular/core';
import { NavbarLinks } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for(link of listOfLinks(); track link) {
      <!-- <li>
        <a [routerLink]="link.link">{{ link.label }}</a>
      </li> -->
      } <<!-- @if(link.children) {
      <app-main-menu-child-links [link]="link" />
    } @else {
      <app-main-menu-link [link]="link" />
    } -->
      <!-- If the link has children, have another component display that 
     if it doesn't have another component that is responsible for display it -->
    </ul>
  `,
  styles: ``,
})
export class MainMenuComponent {
  listOfLinks = input.required<NavbarLinks>(); // the new hottness
}
