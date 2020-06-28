import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../_services';
import { User } from '../model/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  public currentUser: User;
  public formGroup: FormGroup;
  public patient: boolean;
  public age: boolean;
  public isResults: boolean;
  public ironIntake: number;
  public doctor: string;
  symptoms = new FormControl();
  symptomsList: string[] = [ 'Fatigue', 'Weakness', 'Pale or yellowish skin', 'Irregular heartbeats', 'Shortness of breath', 'Dizziness or lightheadedness', 'Chest pain', 'Cold hands and feet', 'Headaches'];
  

  constructor(private _formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private userService: UserService) { 
    this.authenticationService.currentUser.subscribe(userData => this.currentUser = userData);
    console.log(this.currentUser)
  }
  ngOnInit() {
    this.patient = true;
    this.formGroup = this._formBuilder.group({
      gender:['', Validators.required],
      age: ['', Validators.required],
      statements: this._formBuilder.group({
        pregnant: ['', Validators.required],
        overweight: ['', Validators.required],
        smoke: ['', Validators.required],
        injured: ['', Validators.required],
        cholesterol: ['', Validators.required],
        hypertension: ['', Validators.required],
      }),
      symptoms: [null, Validators.required]
    })
  }

  public goBackAge(){
    this.patient=true;
    this.age = false;
  }
  
  public goNextGender(){
    this.patient = false;
    this.age = true;
  }

  public results(){
    if (this.formGroup.controls.age.value <= 3){
      this.ironIntake = 7;
    }
    else if(this.formGroup.controls.age.value <=8){
      this.ironIntake = 10;
    }
    else if (this.formGroup.controls.age.value <=13){
      this.ironIntake = 8;
    }
    else if(this.formGroup.controls.age.value <=18){
      if (this.formGroup.controls.gender.value === "male"){
        this.ironIntake = 11;
      }
      else{
        this.ironIntake = 15
      }
    }
    else if(this.formGroup.controls.age.value <=50 && this.formGroup.controls.gender.value === "female"){
      this.ironIntake = 18;
    }
    else if(this.formGroup.controls.age.value <=120){
      this.ironIntake = 8;
    }
    this.isResults = true;

    if(this.formGroup.controls.symptoms.value.length >= 2){
      this.doctor="You have " + this.formGroup.controls.symptoms.value.length + " symptoms selected. We recommend you to pay a visit to your doctor.";
    }
    else{
      this.doctor="You have " + this.formGroup.controls.symptoms.value.length + " symptom selected. Nonetheless we always recommend you to pay regular visits to your doctor.";
    }

    if(this.currentUser){
      this.userService.addIronIntake(this.ironIntake).subscribe()
    }
  }


}
