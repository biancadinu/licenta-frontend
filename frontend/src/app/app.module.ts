import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestureConfig, MatDialogModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider, SocialLoginModule } from 'ng4-social-login';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IronCalculatorComponent } from './iron-calculator/iron-calculator.component';
import { NutritionalFactsComponent } from './iron-calculator/nutritional-facts/nutritional-facts.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupComponent } from './signup/signup.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { DailyFoodListApiService } from './_services/daily-food-list.service';
import { FoodApiService } from './_services/food.service';
import { RecipeApiService } from './_services/recipe.service';


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
    ProfileComponent,
    AddRecipeComponent,
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
    AngularEditorModule,
    ToastrModule.forRoot(),
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
