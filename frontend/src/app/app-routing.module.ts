import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HomeComponent } from './home/home.component';
import { IronCalculatorComponent } from './iron-calculator/iron-calculator.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SymptomsComponent } from './symptoms/symptoms.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'iron-calculator', component: IronCalculatorComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipe/:id', component: RecipeDetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add-recipes', component: AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
