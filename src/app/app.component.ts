import { Component, ChangeDetectorRef, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showThankYou = false;
  currentFormIndex = 0;
  formSchma = [
    {
      stepName: 'Step 1',
      Controls: [
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
      ]
    },
    {
      stepName: 'Step 2',
      Controls: [
        {
          Field: 'Interested In?',
          Type: 'checkbox',
          Required: true,
          Options: ['Books', 'TV', 'Video games']
        }
      ]
    }
  ];

  constructor() { }

  getFormData(formData) {
    console.log(formData);
    if (this.formSchma.length - 1 === this.currentFormIndex) {
      this.showThankYou = true;
    } else {
      this.currentFormIndex += 1;
    }
  }

  resetForm() {
    this.currentFormIndex = 0;
    this.showThankYou = false;
  }
}
