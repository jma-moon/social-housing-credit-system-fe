import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  public getRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public postRequest<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public putRequest<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  public deleteRequest<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

}
