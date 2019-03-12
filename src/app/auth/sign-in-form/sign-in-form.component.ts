import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignIn } from '../models/sign-in';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  @Output() signInChange = new EventEmitter<SignIn>();
  @Input() signUpRoute = "";

  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.createSignInForm();
  }

  ngOnInit() {
  }

  private createSignInForm(): FormGroup {
    return this.formBuilder.group({
      personalId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    const signIn: SignIn = this.createSignIn(this.signInForm);
    this.signInChange.emit(signIn);
  }

  private createSignIn(form: FormGroup): SignIn {
    return {
      personalId: form.get('personalId').value,
      password: form.get('password').value,
    };
  }

}
