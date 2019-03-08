import { Injectable } from '@angular/core';
import { RestApiService } from '../../core/rest-api/rest-api.service';
import { CreditRequest } from '../models/credit-request';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialHousingApiService {

  private url = environment.resource;

  constructor(private restApiService: RestApiService) { }

  public calculate(creditRequest: CreditRequest): Observable<CreditRequest> {
    return this.restApiService.postRequest(`${this.url}housing-credit`, creditRequest);
  }

}
