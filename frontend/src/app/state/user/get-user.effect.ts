import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserDataService } from '../services/user-data.service';
import { inject } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { UserActions } from './actions';

export const loadUser = createEffect(
  (actions$ = inject(Actions), service = inject(UserDataService)) => {
    return actions$.pipe(
      ofType(UserActions.getTheUser),
      switchMap(() =>
        service
          .getUser()
          .pipe(map((user) => UserActions.userLoaded({ payload: user })))
      )
    );
  },
  { functional: true }
);
