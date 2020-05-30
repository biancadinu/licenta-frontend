import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import { faWeight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  clockIcon = faClock;
  cheeseIcon = faCheese;
  weightIcon = faWeight;

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
