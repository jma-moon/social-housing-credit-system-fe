import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @Output() personChange = new EventEmitter<Person>();

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      amountPerMonth: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  ngOnInit() {
  }

  submitPerson() {
    const person = this.createPerson(this.personForm);
    this.personChange.emit(person);
  }

  private createPerson(personForm: FormGroup): Person {
    return  {
      fullName: personForm.get('fullName').value,
      age: personForm.get('age').value,
      amountPerMonth: personForm.get('amountPerMonth').value,
    };
  }

}
