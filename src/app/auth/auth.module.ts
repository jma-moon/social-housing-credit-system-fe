import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignInFormComponent,
    SignInPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
