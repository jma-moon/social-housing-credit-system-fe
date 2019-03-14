import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
      },
      {
        path: 'credit-request',
        loadChildren: './credit-request/credit-request.module#CreditRequestModule',
      },
      {
        path: 'engine-parameters',
        loadChildren: './engine-parameters/engine-parameters.module#EngineParametersModule',
      },
      {
        path: 'person',
        loadChildren: './person/person.module#PersonModule',
      },
      {
        path: 'properties',
        loadChildren: './property/property.module#PropertyModule',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
