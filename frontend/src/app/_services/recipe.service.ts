import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable()
export class RecipeApiService{
    baseUrl = environment.baseUrl + 'recipe/'
    constructor(private httpClient: HttpClient){}

    listRecipes(): Observable<Recipe[]>{
        return this.httpClient.get<Recipe[]>(this.baseUrl);
    }
}