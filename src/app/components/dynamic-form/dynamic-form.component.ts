import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() formObject;
  schema;
  @Output() emitData = new EventEmitter();
  private form: FormGroup;

  get getForm() {
    return this.form;
  }

  get formControls() {
    return _.values(this.form.controls);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.schema = this.formObject.Controls;
    this.createControls();
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    const previousValue = changes.formObject.previousValue;
    const currentValue = changes.formObject.currentValue;
    const isEqual = _.isEqual(previousValue, currentValue);
    if (!isEqual && previousValue && currentValue) {
      this.schema = currentValue.Controls;
      this.createControls();
    }
  }

  getControlName(c: AbstractControl): string {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  getControlNameAsLabel(text): string {
    return _.startCase(text);
  }

  private createControls() {
    this.form = this.fb.group({});
    for (const object of this.schema) {
      const validations = [];
      if (object.Required) {
        validations.push(Validators.required);
      }
      if (object.Length) {
        validations.push(Validators.maxLength(object.Length));
      }
      this.form.addControl(_.camelCase(object.Field.replace(/\s/g, '')), this.fb.control('', validations));
    }
  }

  submit() {
    this.emitData.emit(this.form.value);
  }
}
