import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialHousingComponent } from './social-housing.component';
import { CreateCreditRequestPageComponent } from './create-credit-request-page/create-credit-request-page.component';

const routes: Routes = [
  {
    path: '',
    component: SocialHousingComponent,
    children: [
      {
        path: '',
        component: CreateCreditRequestPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialHousingRoutingModule { }
