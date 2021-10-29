import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule
    
  ]
})
export class AuthModule { }
