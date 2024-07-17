import { CanActivateFn, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MockupComponent } from './mockup/mockup.component';
import { provideEffects } from '@ngrx/effects';
import { DashboardNavigationEffect } from './state/effects/navigation.effects';
import { provideState, Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { UserFeature } from '../../state/user/user-feature';
import { UserSoftwareFeature } from './state/reducers/user-software.feature';
import { EntitledSoftwareEffect } from './state/effects/software.effects';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    canActivateChild: [userIsLoadedGuard()],
    providers: [
      provideState(UserSoftwareFeature),
      provideEffects([DashboardNavigationEffect, EntitledSoftwareEffect]),
    ],
    component: DashboardComponent,
    children: [
      {
        path: 'mocks',
        component: MockupComponent,
      },
    ],
  },
];

function userIsLoadedGuard(): CanActivateFn {
  return () => {
    const store = inject(Store);
    return store.selectSignal(UserFeature.selectUserLoaded)();
  };
}
