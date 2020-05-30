import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../model/food.model';

@Injectable()
export class DailyFoodListApiService{
    baseUrl = environment.baseUrl + 'daily-food-list/'
    constructor(private httpClient: HttpClient){}

    createDailyFoodList(food: Food, servings: number): Observable<any>{
        const body={
            user: 1,
            food: [food.id],
            servings: servings,
        }
        return this.httpClient.post<any>(this.baseUrl, body);
    }
}