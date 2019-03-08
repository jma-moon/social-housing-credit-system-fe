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

  createForm(): FormGroup {
    return this.creditRequestForm = this.formBuilder.group({
      person: this.formBuilder.group({
        name: ['', [Validators.required]],
        age: ['', [Validators.required]],
        affordablePaymentPerMonth: ['', [Validators.required]],
      }),
      property: this.formBuilder.group({
        location: ['', [Validators.required]],
        price: ['', [Validators.required]],
      }),
    });
  }

  submitForm() {
    const creditRequest: CreditRequest = {
      person: {
        name: this.creditRequestForm.get('person.name').value,
        age: this.creditRequestForm.get('person.age').value,
        affordablePaymentPerMonth: this.creditRequestForm.get('person.affordablePaymentPerMonth').value,
      },
      property: {
        location: this.creditRequestForm.get('property.location').value,
        price: this.creditRequestForm.get('property.price').value,
      }
    };
    this.creditRequestChange.emit(creditRequest);
  }

}
