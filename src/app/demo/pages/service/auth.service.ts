import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid: any;
  constructor(public afAuth: AngularFireAuth,
    private route: Router,
    public database: AngularFireDatabase,
  ) { }

  errorCode:any;
  errorMessage:any;
singup(data:any){
  // const email:string = data.email
  //   const password:string = data.password
firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  .then((userCredential) => {

    var user = userCredential.user;
    this.uid = user.uid
    this.route.navigate([''])
    localStorage.setItem('userid',this.uid)
    // user.displayName = data.username
    // ...
  })
  .catch((error) => {
    this.errorCode = error.code;
    this.errorMessage = error.message;
    // debugger;
    // ..
  });
}

singin(data:any){
  const email = data.email
    const password =data.password
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    this.uid = user.uid
    this.route.navigate([''])
    localStorage.setItem('userid',this.uid)
    // user.displayName = data.username
    // ...
  })
  .catch((error) => {
    this.errorCode = error.code;
    this.errorMessage = error.message;
  });

}
  singout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.route.navigate(['authantication/singin'])
      localStorage.removeItem('userid')
    }).catch((error) => {
      // An error happened.
    });
  }
 
}