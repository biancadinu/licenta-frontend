import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../model/food.model';

@Injectable()
export class FoodApiService{
    baseUrl = environment.baseUrl + 'food/'
    constructor(private httpClient: HttpClient){}

    searchFood(foodName: string): Observable<Food[]>{
        return this.httpClient.get<Food[]>(this.baseUrl, {params:{search: foodName}});
    }
}