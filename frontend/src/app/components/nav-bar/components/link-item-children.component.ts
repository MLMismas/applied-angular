import { Component, input } from '@angular/core';
import { NavbarLink } from '../models';

@Component({
  selector: 'app-link-item-children',
  standalone: true,
  imports: [],
  template: ` <li>
    <details>
      <summary>{{ link().label }}</summary>
      <ul class="p-2">
        @for (child of link().children; track $index) {
        <li>
          <a>{{ child.label }}</a>
        </li>
        }
      </ul>
    </details>
  </li>`,
  styles: ``,
})
export class LinkItemChildrenComponent {
  link = input.required<NavbarLink>();
}
