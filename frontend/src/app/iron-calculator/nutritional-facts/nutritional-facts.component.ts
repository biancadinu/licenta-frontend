import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-nutritional-facts',
  templateUrl: './nutritional-facts.component.html',
  styleUrls: ['./nutritional-facts.component.scss']
})
export class NutritionalFactsComponent implements OnInit {
  public food;
  totalIntake = 2000;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.food = this.data.food;
  }

  public calculatePercentage(value) {
    return (value * this.totalIntake) / 100;
  }

}
