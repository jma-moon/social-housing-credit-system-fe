import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialHousingRoutingModule } from './social-housing-routing.module';
import { SocialHousingComponent } from './social-housing.component';
import { CreateCreditRequestPageComponent } from './create-credit-request-page/create-credit-request-page.component';
import { CreateCreditRequestFormComponent } from './create-credit-request-form/create-credit-request-form.component';
import { SharedModule } from '../shared/shared.module';
import { CreditRequestViewComponent } from './credit-request-view/credit-request-view.component';

@NgModule({
  declarations: [
    SocialHousingComponent,
    CreateCreditRequestPageComponent,
    CreateCreditRequestFormComponent,
    CreditRequestViewComponent,
  ],
  imports: [
    CommonModule,
    SocialHousingRoutingModule,
    SharedModule,
  ]
})
export class SocialHousingModule { }
