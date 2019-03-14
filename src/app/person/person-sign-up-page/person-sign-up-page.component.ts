import { Component, OnInit } from '@angular/core';
import { PersonApiService } from '../services/person-api.service';
import { Person } from '../models/person';
import { take } from 'rxjs/operators';
import { PersonDataService } from '../services/person-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-sign-up-page',
  templateUrl: './person-sign-up-page.component.html',
  styleUrls: ['./person-sign-up-page.component.scss']
})
export class PersonSignUpPageComponent implements OnInit {

  constructor(
    private personDataService: PersonDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  savePerson(person: Person): void {
    this.personDataService.savePerson(person);
  }

}
