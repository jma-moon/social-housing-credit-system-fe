import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { SignIn } from '../models/sign-in';
import { take } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Person } from '../../person/models/person';
import { SessionStorageService } from '../../core/session-storage/session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  private _person = new BehaviorSubject<Person>(null);

  constructor(
    private authApiService: AuthApiService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
  ) {
    const person = this.sessionStorageService.getItem('auth');
    this._person.next(person);
  }

  public get person$(): Observable<Person> {
    return this._person.asObservable();
  }

  public signIn(signIn: SignIn): void {
    this.authApiService.signIn(signIn).pipe(take(1)).subscribe(
      person => {
        this.sessionStorageService.setItem('auth', person);
        this._person.next(person);
        this.router.navigate(['/', 'credit-request']);
      },
      error => {
        console.log('error');
      }
    );
  }

  public signOut(): void {
    this.sessionStorageService.removeItem('auth');
    this._person.next(null);
    this.router.navigate(['/', 'auth', 'sign-in']);
  }

}
