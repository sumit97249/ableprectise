import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  ApiService
} from '../service/api.service';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public service: ApiService) {}
  users;
  posts: any ;
  comments;
  exampale ="new posts coming soon"
  ngOnInit() {
    this.page1() ;
    // this.service.getpost().subscribe(res=>{
    //   this.posts = res ;
      
    // })







    // this.service.getComments().subscribe(comments => {
    //   this.comments = comments;
    //   console.log(comments)

    //   this.service.getUser().subscribe(users => {
    //     console.log(users)
    //     this.users = users;

    //     this.service.getpost().subscribe((posts: any) => {
    //       console.log(posts)
    //       // this.posts = posts;
    //       for (let index = 0; index < posts.length; index++) {
    //         const element = posts[index];
    //         let commentArr = this.comments.filter(comment => comment.postId == element.id);
    //         element['comments'] = commentArr;
    //         this.posts.push(element);
    //       }
    //     })
    //   })
    // })
  }

  addPost(){
    // const data=[
    //   {"title " : "post"},
    //   {"body " : "post"},
    // ]
    // this.service.getpost(data)
  }
  page1() {
    const arr: any[] = []
    this.service.getpost().pipe(map((resdata: any) => {
        for (const key in resdata) {
          arr.push({
            key: key,
            ...resdata[key]
          })
        }
        return arr
      }))
      .subscribe(res => {
        // this.respons = res
        console.log(res)
        this.posts = res
      })
  }


  getPostUsername(post) {
    //  debugger;
    // const user = this.users.filter(data => post.userId == data.id)
    return post.first_name;
  }
  


}
