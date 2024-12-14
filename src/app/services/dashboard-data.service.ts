import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, Observable, from, shareReplay, tap } from 'rxjs';
import { DataResponse } from '../interfaces/data-response';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { DashboardState } from '../store/reducers/dashboard.reducer';
import { loadDashboardData } from '../store/actions/dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private apiUrl = environment.API_URL;

  private subject = new BehaviorSubject<DataResponse | undefined>(undefined);
  // dashboardData: Observable<DataResponse | undefined> =
  //   this.subject.asObservable();

  dashboardData$: Observable<DataResponse | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  // constructor() {}

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.dashboardData$ = store.select((state) => state.dashboard.data);
    this.loading$ = store.select((state) => state.dashboard.loading);
    this.error$ = store.select((state) => state.dashboard.error);
  }

  // requestObservable(): Observable<DataResponse> {
  //   return new Observable((observer) => {
  //     axios
  //       .get<DataResponse>(this.apiUrl)
  //       .then((response: AxiosResponse<DataResponse>) => {
  //         observer.next(response.data);
  //         observer.complete();
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data', error);
  //         observer.error(error);
  //       });
  //   });
  // }

  /**
   * Retrieves data from the API.
   * @returns An Observable emitting DataResponse objects.
   * @throws Throws an error if fetching data fails.
   */
  // init() {
  //   axios
  //     .get<DataResponse>(this.apiUrl)
  //     .then((response: AxiosResponse<DataResponse>) => {
  //       this.subject.next(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data', error);
  //       this.subject.error(error);
  //     });
  // }

  init() {
    this.store.dispatch(loadDashboardData());
  }
}
