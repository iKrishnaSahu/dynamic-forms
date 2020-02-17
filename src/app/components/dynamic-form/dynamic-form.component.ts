import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {

  @Input() schema;

  constructor() { }

  ngOnInit() {
    console.log(this.schema);
  }

}
