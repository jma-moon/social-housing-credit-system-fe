import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Person } from '../person/models/person';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  @Input() person: Person;
  @Output() logoutChange = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.logoutChange.emit(this.person);
  }

}
