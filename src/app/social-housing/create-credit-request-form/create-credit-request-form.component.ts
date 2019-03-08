import { Component, OnInit, EventEmitter } from '@angular/core';
import { CreditRequest } from '../models/credit-request';
import { Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-credit-request-form',
  templateUrl: './create-credit-request-form.component.html',
  styleUrls: ['./create-credit-request-form.component.scss']
})
export class CreateCreditRequestFormComponent implements OnInit {

  @Output() creditRequestChange = new EventEmitter<CreditRequest>();

  creditRequestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creditRequestForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.creditRequestForm = this.formBuilder.group({
      person: this.formBuilder.group({
        name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        affordablePaymentPerMonth: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      }),
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
      person: {
        name: formGroup.get('person.name').value,
        age: formGroup.get('person.age').value,
        affordablePaymentPerMonth: formGroup.get('person.affordablePaymentPerMonth').value,
      },
      property: {
        location: formGroup.get('property.location').value,
        price: formGroup.get('property.price').value,
      }
    };
  }

}
