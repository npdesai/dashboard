import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DashboardActions from '../actions/dashboard.actions';
import { environment } from '../../../environments/environment';
import {
  catchError,
  exhaustMap,
  from,
  map,
  of,
} from 'rxjs';
import { DataResponse } from '../../interfaces/data-response';
import axios from 'axios';

@Injectable()
export class DashboardEffects {
  private apiUrl = environment.API_URL;

  loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      exhaustMap(() =>
        from(axios.get<DataResponse>(this.apiUrl)).pipe(
          map((response) =>
            DashboardActions.loadDashboardDataSuccess({ data: response.data })
          ),
          catchError((error) =>
            of(DashboardActions.loadDashboardDataFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
