import { Injectable } from '@angular/core';
import { PersonApiService } from './person-api.service';
import { Person } from '../models/person';
import { take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  private _person = new BehaviorSubject<Person>(null);

  constructor(private personApiService: PersonApiService, private router: Router) { }

  public get person$(): Observable<Person> {
    return this._person.asObservable();
  }

  public setPerson(person: Person): void {
    this._person.next(person);
  }

  public resetPerson() {
    this.setPerson(null);
  }

  savePerson(person: Person): void {
    this.personApiService.save(person).pipe(take(1)).subscribe(
      data => {
        this.router.navigate(['/', 'auth', 'sign-in']);
      },
      error => {
      },
    );
  }

}
