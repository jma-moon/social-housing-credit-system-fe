import { Injectable } from '@angular/core';
import { RestApiService } from '../../core/rest-api/rest-api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  private url = environment.resource;

  constructor(private restApiService: RestApiService) { }

  public findAll(): Observable<Property[]> {
    return this.restApiService.getRequest(`${this.url}properties`);
  }

  public save(property: Property): Observable<Property> {
    return this.restApiService.postRequest(`${this.url}properties`, property);
  }

}
