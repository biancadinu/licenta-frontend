import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { IronCalculatorComponent } from './iron-calculator/iron-calculator.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "symptoms", component: SymptomsComponent},
  {path: "iron-calculator", component: IronCalculatorComponent},
  {path: "recipes", component: RecipesComponent},
  {path: "recipe/:id", component: RecipeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
