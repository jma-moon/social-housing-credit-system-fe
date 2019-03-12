import { Component, OnInit } from '@angular/core';
import { SignIn } from '../models/sign-in';
import { AuthDataService } from '../services/auth-data.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  signUpRoute = "/person/sign-up";

  constructor(private authDataService: AuthDataService) { }

  ngOnInit() {
  }

  signIn(signIn: SignIn): void {
    this.authDataService.signIn(signIn);
  }

}
