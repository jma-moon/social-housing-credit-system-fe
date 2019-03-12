import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonSignUpPageComponent } from './person-sign-up-page/person-sign-up-page.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonComponent,
    PersonSignUpPageComponent,
    PersonFormComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
  ],
})
export class PersonModule { }
