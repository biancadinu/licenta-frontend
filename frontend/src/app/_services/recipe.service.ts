import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Recipe } from '../model/recipe.model';

@Injectable()
export class RecipeApiService {
  baseUrl = environment.baseUrl + 'recipe/';

  constructor(private httpClient: HttpClient) {
  }

  listRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.baseUrl);
  }

  addToFav(recipeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + recipeId + '/favorite/', {});
  }

  removeFav(recipeId): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + recipeId + '/remove-favorite/', {});
  }

  createRecipe(recipeData): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + 'create-recipe/', recipeData);
  }
}
