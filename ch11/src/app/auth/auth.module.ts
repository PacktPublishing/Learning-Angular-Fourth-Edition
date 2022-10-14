import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
