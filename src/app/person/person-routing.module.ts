import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonSignUpPageComponent } from './person-sign-up-page/person-sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full',
      },
      {
        path: 'sign-up',
        component: PersonSignUpPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
