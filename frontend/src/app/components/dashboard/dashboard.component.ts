import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeginComponent } from './create-issues/steps/begin.component';
import { Store } from '@ngrx/store';
import { SoftwareListActions } from './state/actions/list.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BeginComponent],
  template: `
    <h1>Welcome to the app</h1>
    <a routerLink="mocks">See the mock</a>
    <router-outlet />
    <app-create-issue-begin />
  `,
  styles: ``,
})
export class DashboardComponent {
  constructor(store: Store) {
    store.dispatch(SoftwareListActions.loadTheEntitledSoftware());
  }
}
