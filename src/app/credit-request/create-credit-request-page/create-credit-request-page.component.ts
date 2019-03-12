import { Component, OnInit } from '@angular/core';
import { SocialHousingApiService } from '../services/social-housing-api.service';
import { CreditRequest } from '../models/credit-request';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-credit-request-page',
  templateUrl: './create-credit-request-page.component.html',
  styleUrls: ['./create-credit-request-page.component.scss']
})
export class CreateCreditRequestPageComponent implements OnInit {

  creditRequest: CreditRequest;

  constructor(private socialHousingApiService: SocialHousingApiService) { }

  ngOnInit() {
  }

  public sendCreditRequest(creditRequest: CreditRequest): void {
    this.socialHousingApiService.calculate(creditRequest)
      .pipe(take(1))
      .subscribe((data) => {
        this.creditRequest = data;
      });
  }

}
