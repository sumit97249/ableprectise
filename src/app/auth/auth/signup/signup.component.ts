import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/pages/service/auth.service';
import { ApiService } from '../../../demo/pages/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private apiservice : ApiService , public authService : AuthService,
    private route :Router ) { }

  ngOnInit() {
  }
  // singup(data){
  //   this.authService.singup(data)
    
  // }
  singin(){
    this.route.navigate(['authantication/singin'])
  }

}
