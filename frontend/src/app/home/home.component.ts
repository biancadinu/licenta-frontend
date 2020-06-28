import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentUser: any; 

  constructor(private authenticationService: AuthenticationService,) { 
    this.authenticationService.currentUser.subscribe(userData => this.currentUser = userData);
  }

  ngOnInit() {
  }

  public isUserLoggedIn(){
    if(this.currentUser){
      return true;
    }
    return false;
  }

}
