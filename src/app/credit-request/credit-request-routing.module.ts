import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditRequestComponent } from './credit-request.component';
import { CreateCreditRequestPageComponent } from './create-credit-request-page/create-credit-request-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreditRequestComponent,
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
export class CreditRequestRoutingModule { }
