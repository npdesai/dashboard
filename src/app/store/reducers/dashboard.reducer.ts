import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import { DataResponse } from '../../interfaces/data-response';

export interface DashboardState {
  data: DataResponse | null;
  error: any;
  loading: boolean;
}

export const initialState: DashboardState = {
  data: null,
  error: null,
  loading: false,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardData, (state) => ({
    ...state,
    loading: true,
  })),
  on(DashboardActions.loadDashboardDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(DashboardActions.loadDashboardDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
