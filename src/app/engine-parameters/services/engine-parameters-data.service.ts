import { Injectable } from '@angular/core';
import { EngineParameter } from '../models/engine-parameter';
import { BehaviorSubject, Observable } from 'rxjs';
import { EngineParametersApiService } from './engine-parameters-api.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EngineParametersDataService {

  private _engineParameterList = new BehaviorSubject<EngineParameter[]>([]);

  constructor(private engineParametersApiService: EngineParametersApiService) {
    this.refreshEngineParameterList();
  }

  public get engineParameterList$(): Observable<EngineParameter[]> {
    return this._engineParameterList.asObservable();
  }

  public refreshEngineParameterList(): void {
    this.engineParametersApiService.findAll()
      .pipe(take(1))
      .subscribe(
        engineParameterList => this._engineParameterList.next(engineParameterList)
      );
  }

  public updateEngineParameter(engineParameter: EngineParameter): void {
    this.engineParametersApiService.update(engineParameter.id, engineParameter)
      .pipe(take(1))
      .subscribe(
        data => this.refreshEngineParameterList()
      );
  }

}
