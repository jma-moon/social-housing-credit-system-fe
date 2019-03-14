import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Property } from '../models/property';
import { PropertyApiService } from './property-api.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  private _properties = new BehaviorSubject<Property[]>([]);

  constructor(private propertyApiService: PropertyApiService) {
    this.refreshProperties();
  }

  public get properties$(): Observable<Property[]> {
    return this._properties.asObservable();
  }

  public refreshProperties(): void {
    this.propertyApiService.findAll().pipe(take(1)).subscribe(
      properties => this.setProperties(properties)
    );
  }

  private setProperties(properties: Property[]): void {
    this._properties.next(properties);
  }

  public createProperty(property: Property): void {
    this.propertyApiService.save(property).pipe(take(1)).subscribe(
      property => {
        this.refreshProperties();
      }
    );
  }

}
