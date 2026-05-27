import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  readonly title = 'Account';
  readonly highlights = ['Premium UX', 'Color-rich design', 'Connected flow'];
}
