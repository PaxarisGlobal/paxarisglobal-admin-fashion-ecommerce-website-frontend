import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  readonly title = 'Signup';
  readonly highlights = ['Premium UX', 'Color-rich design', 'Connected flow'];
}
