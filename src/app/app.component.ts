import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formSchma = [
    {
      Field: 'First Name',
      Type: 'text',
      Required: true,
      Length: 30
    },
    {
      Field: 'Last Name',
      Type: 'text',
      Required: true,
      Length: 30
    },
    {
      Field: 'Address',
      Type: 'textarea',
      Required: true,
      Length: 300
    }
  ];
}
