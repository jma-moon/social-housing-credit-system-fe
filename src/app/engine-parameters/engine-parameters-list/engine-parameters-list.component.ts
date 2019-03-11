import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { EngineParameter } from '../models/engine-parameter';

@Component({
  selector: 'app-engine-parameters-list',
  templateUrl: './engine-parameters-list.component.html',
  styleUrls: ['./engine-parameters-list.component.scss']
})
export class EngineParametersListComponent implements OnInit {

  @Input() engineParameters: EngineParameter[] = [];
  @Output() updateEngineParameterChange: EventEmitter<EngineParameter> = new EventEmitter<EngineParameter>();

  editRows = {};

  constructor() { }

  ngOnInit() {
  }

  addEditRow(engineParameter: EngineParameter) {
    this.editRows[engineParameter.id] = engineParameter.value;
  }

  removeEditRow(id: number) {
    delete this.editRows[id];
  }

  updateEngineParameter(id: number, value: number) {

    const engineParameter = this.engineParameters
      .filter(engineParameter => engineParameter.id === id)[0];

    engineParameter.value = value;

    this.updateEngineParameterChange.emit(engineParameter);

    this.removeEditRow(id);
  }

}
