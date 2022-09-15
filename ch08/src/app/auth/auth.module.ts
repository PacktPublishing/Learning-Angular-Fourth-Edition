import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
