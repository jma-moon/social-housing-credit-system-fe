import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../person/services/person-data.service';
import { Observable } from 'rxjs';
import { Person } from '../person/models/person';
import { AuthDataService } from '../auth/services/auth-data.service';

@Component({
  selector: 'app-navigation-menu-page',
  templateUrl: './navigation-menu-page.component.html',
  styleUrls: ['./navigation-menu-page.component.scss']
})
export class NavigationMenuPageComponent implements OnInit {

  person$: Observable<Person>;

  constructor(private authDataService: AuthDataService) { }

  ngOnInit() {
    this.person$ = this.authDataService.person$;
  }

  public logout(person: Person) {
    this.authDataService.signOut();
  }

}
