import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Property } from '../models/property';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  @Output() propertyChange = new EventEmitter<Property>();

  private propertyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.propertyForm = this.createPropertyForm();
  }

  ngOnInit() {
  }

  private createPropertyForm() {
    return this.formBuilder.group({
      location: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  submitForm() {
    const property = this.propertyForm.value;
    this.propertyChange.emit(property);
  }

}
