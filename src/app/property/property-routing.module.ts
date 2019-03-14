import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PropertyListPageComponent } from './property-list-page/property-list-page.component';
import { CreatePropertyPageComponent } from './create-property-page/create-property-page.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      {
        path: '',
        component: PropertyListPageComponent,
      },
      {
        path: 'new',
        component: CreatePropertyPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
