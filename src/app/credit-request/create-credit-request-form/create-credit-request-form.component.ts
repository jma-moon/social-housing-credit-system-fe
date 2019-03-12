import { Component, OnInit, EventEmitter } from '@angular/core';
import { CreditRequest } from '../models/credit-request';
import { Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDataService } from '../../auth/services/auth-data.service';

@Component({
  selector: 'app-create-credit-request-form',
  templateUrl: './create-credit-request-form.component.html',
  styleUrls: ['./create-credit-request-form.component.scss']
})
export class CreateCreditRequestFormComponent implements OnInit {

  @Output() creditRequestChange = new EventEmitter<CreditRequest>();

  creditRequestForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authDataService: AuthDataService) { }

  ngOnInit() {
    this.creditRequestForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.creditRequestForm = this.formBuilder.group({
      property: this.formBuilder.group({
        location: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      }),
    });
  }

  submitForm() {

    const creditRequest: CreditRequest = this.createCreditRequest(this.creditRequestForm);

    this.creditRequestChange.emit(creditRequest);
  }

  private createCreditRequest(formGroup: FormGroup): CreditRequest {
    return  {
      person: this.authDataService.person,
      property: {
        location: formGroup.get('property.location').value,
        price: formGroup.get('property.price').value,
      }
    };
  }

}
