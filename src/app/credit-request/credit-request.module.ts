import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRequestRoutingModule } from './credit-request-routing.module';
import { CreditRequestComponent } from './credit-request.component';
import { CreateCreditRequestPageComponent } from './create-credit-request-page/create-credit-request-page.component';
import { CreateCreditRequestFormComponent } from './create-credit-request-form/create-credit-request-form.component';
import { SharedModule } from '../shared/shared.module';
import { CreditRequestViewComponent } from './credit-request-view/credit-request-view.component';

@NgModule({
  declarations: [
    CreditRequestComponent,
    CreateCreditRequestPageComponent,
    CreateCreditRequestFormComponent,
    CreditRequestViewComponent,
  ],
  imports: [
    CommonModule,
    CreditRequestRoutingModule,
    SharedModule,
  ]
})
export class CreditRequestModule { }
