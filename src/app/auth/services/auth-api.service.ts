import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../../person/models/person';
import { RestApiService } from '../../core/rest-api/rest-api.service';
import { SignIn } from '../models/sign-in';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private url = environment.resource;

  constructor(public restApiService: RestApiService) { }

  public signIn(signIn: SignIn): Observable<Person> {
    return this.restApiService.postRequest(`${this.url}auth/sign-in`, signIn);
  }

}
