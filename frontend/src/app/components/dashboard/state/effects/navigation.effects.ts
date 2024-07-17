import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '../../../../state/user/actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardNavigationEffect {
  constructor(private actions$: Actions, private router: Router) {}

  navigateWhenUserLoaded$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserActions.userLoaded),
        tap(() => {
          const path = window.location.pathname;
          const redirectTo = path === '/' ? '/dashboard' : path;
          this.router.navigateByUrl(redirectTo);
        })
      );
    },
    { dispatch: false }
  );
}
