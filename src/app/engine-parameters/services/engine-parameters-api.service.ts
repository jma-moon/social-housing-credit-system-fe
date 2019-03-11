import { Injectable } from '@angular/core';
import { RestApiService } from '../../core/rest-api/rest-api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EngineParameter } from '../models/engine-parameter';

@Injectable({
  providedIn: 'root'
})
export class EngineParametersApiService {

  private url = environment.resource;

  constructor(private restApiService: RestApiService) { }

  public findAll(): Observable<EngineParameter[]> {
    return this.restApiService.getRequest(`${this.url}engine-parameters`);
  }

  public update(id: number, engineParameter: EngineParameter): Observable<EngineParameter> {
    return this.restApiService.putRequest(`${this.url}engine-parameters/${id}`, engineParameter);
  }

}
