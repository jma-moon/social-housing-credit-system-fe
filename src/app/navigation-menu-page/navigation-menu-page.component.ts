import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../person/services/person-data.service';
import { Observable } from 'rxjs';
import { Person } from '../person/models/person';

@Component({
  selector: 'app-navigation-menu-page',
  templateUrl: './navigation-menu-page.component.html',
  styleUrls: ['./navigation-menu-page.component.scss']
})
export class NavigationMenuPageComponent implements OnInit {

  person$: Observable<Person>;

  constructor(private personDataService: PersonDataService) { }

  ngOnInit() {
    this.person$ = this.personDataService.person$;
  }

  public logout(person: Person) {
    this.personDataService.resetPerson();
  }

}
