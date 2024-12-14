import { createAction, props } from '@ngrx/store';
import { DataResponse } from '../../interfaces/data-response';

export const loadDashboardData = createAction('[Dashboard] Load Data');
export const loadDashboardDataSuccess = createAction(
  '[Dashboard] Load Data Success',
  props<{ data: DataResponse }>()
);
export const loadDashboardDataFailure = createAction(
  '[Dashboard] Load Data Failure',
  props<{ error: any }>()
);
