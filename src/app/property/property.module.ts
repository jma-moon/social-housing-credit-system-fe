import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { PropertyListPageComponent } from './property-list-page/property-list-page.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { CreatePropertyPageComponent } from './create-property-page/create-property-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PropertyComponent,
    PropertyListPageComponent,
    PropertyListComponent,
    PropertyFormComponent,
    CreatePropertyPageComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
  ]
})
export class PropertyModule { }
