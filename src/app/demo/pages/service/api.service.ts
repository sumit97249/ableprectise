import {
  Injectable,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // comment:any;

  constructor(private http: HttpClient) {

  }
  ///get data
  getUser() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
  getpost() {

    // let url = "https://jsonplaceholder.typicode.com/posts";
    let url = "https://able-7763d-default-rtdb.firebaseio.com/post.json"
    return this.http.get(url);

  }
  getComments() {
    let url = "https://jsonplaceholder.typicode.com/comments";
    return this.http.get(url);

  }
  getAlbums() {
    let url = "https://jsonplaceholder.typicode.com/albums";
    return this.http.get(url);

  }
  getAlbumsImage(i) {
    let url = "https://jsonplaceholder.typicode.com/albums/"+i+"/photos";
    console.log(i+1)
    return this.http.get(url);

  }
  getUserList(){
    let url ="https://able-7763d-default-rtdb.firebaseio.com/user.json";
    return this.http.get(url)
  }
  getUserList2(){
    let url ="https://reqres.in/api/users?page=2";
    return this.http.get(url)
  }


  /// delete
  deluser(id){
    let url ="https://able-7763d-default-rtdb.firebaseio.com/user/"+id+".json";
    console.log(url);
    return this.http.delete(url)
  }


 //// post ///
 postUser(data){
   let url ="https://able-7763d-default-rtdb.firebaseio.com/post.json";
   return this.http.post(url,data)
 }

 contry(){
  
  let url ="https://raw.githubusercontent.com/khkwan0/countryCityStateJson/master/src/country-state-city/lib/country.json";
  return this.http.get(url)
 }

 stats(){
  
  let url ="https://raw.githubusercontent.com/khkwan0/countryCityStateJson/master/src/country-state-city/lib/state.json";
  return this.http.get(url)
 }

 city(){
  
  let url ="https://raw.githubusercontent.com/khkwan0/countryCityStateJson/master/src/country-state-city/lib/city.json";
  return this.http.get(url)
 }
 /////////auth api///////
 singin(data){
 let url ="https://fakerestapi.azurewebsites.net/api/v1/Users";
 return this.http.post(url,data)
 }
 singup(data){
 let url ="https://fakerestapi.azurewebsites.net/api/v1/Users";
 return this.http.post(url,data)
 }
}


