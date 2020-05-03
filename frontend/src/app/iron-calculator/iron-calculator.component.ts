import { Component, OnInit } from '@angular/core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { NutritionalFactsComponent } from './nutritional-facts/nutritional-facts.component';

@Component({
  selector: 'app-iron-calculator',
  templateUrl: './iron-calculator.component.html',
  styleUrls: ['./iron-calculator.component.scss']
})
export class IronCalculatorComponent implements OnInit {

  fishIcon = faFish;
  carrotIcon = faCarrot;
  birthdayCakeIcon = faBirthdayCake;
  pizzaSliceIcon = faPizzaSlice;
  searchIcon = faSearch;


  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }
  showFactsDialog() {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        this.dialog.open(NutritionalFactsComponent, dialogConfig);
    }
    

}
