import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { faBirthdayCake, faCarrot, faFish, faPizzaSlice, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Food } from '../model/food.model';
import { User } from '../model/user.model';
import { DailyFoodListApiService } from '../_services/daily-food-list.service';
import { FoodApiService } from '../_services/food.service';
import { UserService } from '../_services/user.service';
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
  foodList: Food[];
  pickedFood: Food;
  servings = 0;
  dailyFoodList;
  currentUser: User[];

  constructor(
    private dialog: MatDialog,
    private foodService: FoodApiService,
    private dailyFoodListService: DailyFoodListApiService,
    private toastrService: ToastrService,
    private userService: UserService) {
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
    const dateTime = new Date();
    console.log(dateTime.getUTCDay());
    this.userService.getUserDetails().subscribe(currentUserData =>{
      console.log(currentUserData)
      const date = dateTime.getFullYear() + '-' + (1 + dateTime.getMonth()) + '-' + dateTime.getUTCDate();
      this.dailyFoodListService.listByDate(date).subscribe(data =>{
        const ironRemaining = currentUserData[0].iron_intake - data[0]['total_iron']
        console.log(data[0]['total_iron']);
        console.log(currentUserData)
        if (ironRemaining > 0){
          this.toastrService.success('You have ' + ironRemaining + ' mg of iron left to consume for today');
        }
        else{
          this.toastrService.success('You hit your total iron intake for today');
        }
      });
    });
  }

  public addToFav(food) {
    this.foodService.addToFav(food.id).subscribe(() => food.is_favorite = !food.is_favorite);
  }

  public removeFromFav(food) {
    this.foodService.removeFav(food.id).subscribe(() => food.is_favorite = !food.is_favorite);
  }

}
