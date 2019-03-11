import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineParametersComponent } from './engine-parameters.component';
import { EngineParametersListPageComponent } from './engine-parameters-list-page/engine-parameters-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: EngineParametersComponent,
    children: [
      {
        path: '',
        component: EngineParametersListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineParametersRoutingModule { }
