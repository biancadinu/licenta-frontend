import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({

  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }