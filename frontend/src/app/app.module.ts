import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, GestureConfig } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { MatRadioModule, MatRadioGroup } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
import { SignupComponent } from './signup/signup.component';
import { IronCalculatorComponent } from './iron-calculator/iron-calculator.component';
import { NutritionalFactsComponent } from './iron-calculator/nutritional-facts/nutritional-facts.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { FoodApiService } from './_services/food.service';
import { DailyFoodListApiService } from './_services/daily-food-list.service';
import { RecipeApiService } from './_services/recipe.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MatSliderModule } from '@angular/material/slider';

const config = new AuthServiceConfig([
{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('854996818669-c9vp31oum6uoefjs1qntll51rdojurur.apps.googleusercontent.com'),
},  
{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('219307636068696'),
}, 
{
  id: LinkedinLoginProvider.PROVIDER_ID,
  provider: new LinkedinLoginProvider('867lu3xsgw3ixf'),
} 

], false);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SymptomsComponent,
    LoginComponent,
    SignupComponent,
    IronCalculatorComponent,
    NutritionalFactsComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
  ],
  entryComponents: [ 
    LoginComponent, 
    ContactComponent,
    SignupComponent,
    IronCalculatorComponent,
    NutritionalFactsComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatAutocompleteModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    SocialLoginModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSliderModule,
  ],
  //providers: [],
    providers: [
    // provider used to create fake backend
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    RecipeApiService,
    DailyFoodListApiService,
    FoodApiService,
    fakeBackendProvider,
    {provide :AuthServiceConfig, useFactory: provideConfig}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
