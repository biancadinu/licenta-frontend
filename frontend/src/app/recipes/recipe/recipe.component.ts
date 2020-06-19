import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from 'src/app/model/recipe.model';
import {RecipeApiService} from '../../_services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeApiService: RecipeApiService) {
  }

  ngOnInit() {
    console.log(this.recipe)
  }

  public removeFromFav() {
    this.recipeApiService.removeFav(this.recipe.id).subscribe(() => this.recipe.is_favorite = !this.recipe.is_favorite);
  }

  public addToFav() {
    this.recipeApiService.addToFav(this.recipe.id).subscribe(() => this.recipe.is_favorite = !this.recipe.is_favorite);
  }

}
