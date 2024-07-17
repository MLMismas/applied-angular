import { CanActivateFn, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { Component, inject } from '@angular/core';
import { SignalsComponent } from './students/signals/signals.component';
import { UserFeature } from './state/user/user-feature';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import('./students/signals/signals.component').then(
            (c) => c.SignalsComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [userIsLoadedGuard()],
    loadChildren: () =>
      import('./components/dashboard/dashboard.routes').then(
        (r) => r.DASHBOARD_ROUTES
      ),
  },
];

function userIsLoadedGuard(): CanActivateFn {
  return () => {
    const store = inject(Store);
    return store.selectSignal(UserFeature.selectUserLoaded)();
  };
}
