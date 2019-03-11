import { Injectable } from '@angular/core';
import { RestApiService } from '../../core/rest-api/rest-api.service';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {

  private url = environment.resource;

  constructor(private restApiService: RestApiService) { }

  public findById(id: number): Observable<Person> {
    return this.restApiService.getRequest(`${this.url}people/${id}`);
  }

  public save(person: Person): Observable<Person> {
    return this.restApiService.postRequest(`${this.url}people`, person);
  }

}
