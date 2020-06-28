import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services'
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  public currentUser: any; 
  public user: any = SocialUser;

  facebooklogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;
    })
  }
  googlelogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;
    })
  }
  linkedinlogin(){
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;
    })
  }

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private dialogRef: MatDialogRef<LoginComponent>,
      private socialAuthService: AuthService,
      private toastr: ToastrService,
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
      {
        this.authenticationService.currentUser.subscribe(userData => this.currentUser = userData);
      }
    
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
                  this.dialogRef.close()
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });

  }

  exitDialog(){
    this.dialogRef.close({event: 'Cancel'});
  }
}
