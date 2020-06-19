import {Component, OnInit} from '@angular/core';
import {faCarrot} from '@fortawesome/free-solid-svg-icons';
import {faBirthdayCake} from '@fortawesome/free-solid-svg-icons';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import {faFish} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NutritionalFactsComponent} from './nutritional-facts/nutritional-facts.component';
import {FoodApiService} from '../_services/food.service';
import {Food} from '../model/food.model';
import {DailyFoodListApiService} from '../_services/daily-food-list.service';

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
  foodList: Food[];
  pickedFood: Food;
  servings = 0;

  constructor(
    private dialog: MatDialog,
    private foodService: FoodApiService,
    private dailyFoodListService: DailyFoodListApiService) {
  }

  ngOnInit() {
  }

  showFactsDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      food: this.pickedFood,
    };
    dialogConfig.width = '400px';
    this.dialog.open(NutritionalFactsComponent, dialogConfig);
  }

  public searchFood(event) {
    this.foodService.searchFood(event.srcElement.value).subscribe(data => {
      this.foodList = data;
    });
  }

  public pickFood(food: Food) {
    this.pickedFood = food;
  }

  public updateServings(event) {
    this.servings = event.srcElement.value;
  }

  public addToDailyFoodList() {
    this.dailyFoodListService.createDailyFoodList(this.pickedFood, this.servings).subscribe();
  }

  public addToFav(food) {
    this.foodService.addToFav(food.id).subscribe(() => food.is_favorite = !food.is_favorite);
  }

  public removeFromFav(food) {
    this.foodService.removeFav(food.id).subscribe(() => food.is_favorite = !food.is_favorite);
  }

}
