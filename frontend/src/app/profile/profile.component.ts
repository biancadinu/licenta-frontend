import { Component, OnInit } from '@angular/core';
import { DailyFoodListApiService } from '../_services/daily-food-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public foodList;

  constructor(private dailyFoodListApiService: DailyFoodListApiService) {
  }

  ngOnInit() {
    const dateTime = new Date();
    console.log(dateTime.getUTCDay());
    const date = dateTime.getFullYear() + '-' + (1 + dateTime.getMonth()) + '-' + dateTime.getUTCDate();
    this.dailyFoodListApiService.listByDate(date).subscribe(data => this.foodList = data);
  }

  removeFromDaily(food) {
    console.log(this.foodList)
    this.dailyFoodListApiService.removeFromList(food.id).subscribe(() => {
      this.foodList.pop(food);
    });
  }
}
