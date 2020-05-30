import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  public currentUser: any; 

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog,
) {
    this.authenticationService.currentUser.subscribe(userData => this.currentUser = userData);
}

public isUserLoggedIn(){
  if(this.currentUser){
    return true;
  }
  return false;
}

showLoginDialog() {
  const dialogRef: MatDialogRef<LoginComponent> = this.dialog.open(LoginComponent, {
    maxHeight: '90vh',
    minWidth: '25vw',
  });
  dialogRef.afterClosed().subscribe( data => {
    if (data.event === 'Success') {
      this.currentUser = this.authenticationService.currentUserValue;
    }
  });
 }

 showContactDialog() {
  const dialogRef: MatDialogRef<ContactComponent> = this.dialog.open(ContactComponent, {
    maxHeight: '90vh',
    maxWidth: '35vw',
  });
  dialogRef.afterClosed().subscribe( data => {
    if (data.event === 'Success') {
      this.currentUser = this.authenticationService.currentUserValue;
    }
  });
 }

 showSignupDialog() {
  const dialogRef: MatDialogRef<SignupComponent> = this.dialog.open(SignupComponent, {
    maxHeight: '90vh',
    maxWidth: '35vw',
  });
  dialogRef.afterClosed().subscribe( data => {
    if (data.event === 'Success') {
      this.currentUser = this.authenticationService.currentUserValue;
    }
  });
 }



logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
