import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ContactComponent>) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.required),
      subject: this.formBuilder.control('', Validators.required),
      body: this.formBuilder.control('', Validators.required)
    });
  }

  onSubmit() {
    this.dialogRef.close();
  }

  exitDialog() {
    this.dialogRef.close();
  }

}
