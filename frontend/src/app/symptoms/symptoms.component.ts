import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  sexAndAgeFormGroup: FormGroup;
  ngOnInit() {
    this.sexAndAgeFormGroup = this._formBuilder.group({
      sex: ['', Validators.required],
      age: ['', Validators.required],
    })
  }

}
