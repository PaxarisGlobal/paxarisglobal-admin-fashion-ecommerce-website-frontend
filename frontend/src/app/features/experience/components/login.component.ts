import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly title = 'Login';
  readonly highlights = ['Premium UX', 'Color-rich design', 'Connected flow'];
}
