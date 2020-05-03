import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  sexAndAgeFormGroup: FormGroup;
  symptoms = new FormControl();
  symptomsList: string[] = [ 'Fatigue', 'Weakness', 'Pale or yellowish skin', 'Irregular heartbeats', 'Shortness of breath', 'Dizziness or lightheadedness', 'Chest pain', 'Cold hands and feet', 'Headaches'];
  
  ngOnInit() {
    this.sexAndAgeFormGroup = this._formBuilder.group({
      sex: ['', Validators.required],
      age: ['', Validators.required],
    })
  
  }
 

}
