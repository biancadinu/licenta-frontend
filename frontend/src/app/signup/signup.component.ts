import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  public currentUser: any; 
  public user: any = SocialUser;

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private socialAuthService: AuthService,    
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
    {
      this.authenticationService.currentUser.subscribe(userData => this.currentUser = userData);
    }
  
  }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    // signup() {
    //     this.submitted = true;
  
    //     // stop here if form is invalid
    //     if (this.signupForm.invalid) {
    //         return;
    //     }
  
    //     this.loading = true;
    //     this.authenticationService.signup(this.f.username.value, this.f.password.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.error = error;
    //                 this.loading = false;
    //             });
    // }
  
    exitDialog(){
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
      this.dialogRef.close({event: 'Cancel'});
    }

}
