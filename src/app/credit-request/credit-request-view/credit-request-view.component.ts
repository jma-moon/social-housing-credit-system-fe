import { Component, OnInit } from '@angular/core';
import { CreditRequest } from '../models/credit-request';
import { Input } from '@angular/core';

@Component({
  selector: 'app-credit-request-view',
  templateUrl: './credit-request-view.component.html',
  styleUrls: ['./credit-request-view.component.scss']
})
export class CreditRequestViewComponent implements OnInit {

  @Input() creditRequest: CreditRequest;

  constructor() { }

  ngOnInit() {
  }

}
