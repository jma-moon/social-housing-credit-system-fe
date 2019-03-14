import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../services/property-data.service';
import { Observable } from 'rxjs';
import { Property } from '../../credit-request/models/property';

@Component({
  selector: 'app-property-list-page',
  templateUrl: './property-list-page.component.html',
  styleUrls: ['./property-list-page.component.scss']
})
export class PropertyListPageComponent implements OnInit {

  properties$: Observable<Property[]>;

  constructor(private propertyDataService: PropertyDataService) {
    this.properties$ = propertyDataService.properties$;
  }

  ngOnInit() {
  }

}
