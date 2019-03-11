import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineParametersRoutingModule } from './engine-parameters-routing.module';
import { EngineParametersComponent } from './engine-parameters.component';
import { EngineParametersListPageComponent } from './engine-parameters-list-page/engine-parameters-list-page.component';
import { EngineParametersListComponent } from './engine-parameters-list/engine-parameters-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EngineParametersComponent, EngineParametersListPageComponent, EngineParametersListComponent],
  imports: [
    CommonModule,
    EngineParametersRoutingModule,
    SharedModule,
  ]
})
export class EngineParametersModule { }
