import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'social-housing-credit',
        pathMatch: 'full',
      },
      {
        path: 'social-housing-credit',
        loadChildren: './social-housing/social-housing.module#SocialHousingModule',
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
