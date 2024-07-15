import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  private http = inject(HttpClient);
  private url = environment.getsUrl;

  getCustomers(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.url}Customers`)
      .pipe(map(data => data));
  }

  getCustomerId(id: string | number): Observable<string> {
    return this.http.get<string>(`${this.url}Customers/${id}`);
  }
}
