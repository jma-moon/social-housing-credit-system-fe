import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { PropertyDataService } from '../services/property-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-property-page',
  templateUrl: './create-property-page.component.html',
  styleUrls: ['./create-property-page.component.scss']
})
export class CreatePropertyPageComponent implements OnInit {

  constructor(private propertyDataService: PropertyDataService, private router: Router) { }

  ngOnInit() {
  }

  createProperty(property: Property): void {
    this.propertyDataService.createProperty(property);
    this.router.navigate(['/', 'properties']);
  }

}
