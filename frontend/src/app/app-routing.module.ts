import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

const routes: Routes = [
  {path: "contact", component: ContactComponent},
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "symptoms", component: SymptomsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
