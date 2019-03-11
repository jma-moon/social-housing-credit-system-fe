import { Component, OnInit } from '@angular/core';
import { EngineParametersApiService } from '../services/engine-parameters-api.service';
import { EngineParameter } from '../models/engine-parameter';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { EngineParametersDataService } from '../services/engine-parameters-data.service';

@Component({
  selector: 'app-engine-parameters-list-page',
  templateUrl: './engine-parameters-list-page.component.html',
  styleUrls: ['./engine-parameters-list-page.component.scss']
})
export class EngineParametersListPageComponent implements OnInit {

  public engineParameters$: Observable<EngineParameter[]>;

  constructor(private engineParametersDataService: EngineParametersDataService, private engineParametersApiService: EngineParametersApiService) {
    this.engineParameters$ = this.engineParametersDataService.engineParameterList$;
  }

  ngOnInit() {
  }

  updateEngineParameter(engineParameter: EngineParameter) {
    this.engineParametersDataService.updateEngineParameter(engineParameter);
  }

}
