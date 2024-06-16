import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { DataResponse } from '../interfaces/data-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private apiUrl = environment.API_URL;

  constructor() {}

  /**
   * Retrieves data from the API.
   * @returns An Observable emitting DataResponse objects.
   * @throws Throws an error if fetching data fails.
   */
  getData(): Observable<DataResponse> {
    return from(
      axios
        .get<DataResponse>(this.apiUrl)
        .then((response: AxiosResponse<DataResponse>) => response.data)
        .catch((error) => {
          console.error('Error fetching data', error);
          throw error;
        })
    );
  }
}
