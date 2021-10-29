import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ApiService
} from 'src/app/demo/pages/service/api.service';
import {
  AuthService
} from 'src/app/demo/pages/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  error:any;
  userList: any;
  constructor(private service: ApiService,
    private authService: AuthService,
    private route : Router
  ) {}

  ngOnInit() {}

  singin(data) {
    console.log(data)
    this.authService.singin(data)
    this.error = this.authService.errorMessage 
  }
  singup(){
    this.route.navigate(['authantication/singup'])
  }
}

