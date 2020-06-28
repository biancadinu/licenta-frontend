import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../_services/recipe.service';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeApiService) { }

  ngOnInit() {
    this.recipeService.listRecipes().subscribe(data => this.recipes = data);
    console.log(this.recipes)
  }

}
