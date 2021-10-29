import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiService
} from '../service/api.service';
import {
  AngularFireStorage
} from '@angular/fire/storage'
import firebase from 'firebase';
import {
  map
} from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any;
  contrys: any;
  statss: any;
  citys: any;
  
  downloadURL: any;
  path: any;
  fileName: any;
  submit:boolean = false;
  btnLoader:boolean = false;
  userid:any;
  constructor(private service: ApiService,
    private authservice: AuthService ,
    private storage: AngularFireStorage) {}

  ngOnInit() {
   this.userid = localStorage.getItem('userid')
    this.page1()
    this.service.contry().subscribe((contry: any[]) => {
      this.contrys = contry

    })

  }
  removeUser(id) {
    if ( confirm( 'can you remove this data ?') ) {
      this.btnLoader = true;
      this.service.deluser(id).subscribe((del: any) => {
        // console.log(del, this.userList);
        this.storage.ref("image/"+ this.userid+"/" +this.fileName).delete().subscribe((res)=>{
          console.log(res);
          
        })
      })
      setTimeout(() => {
        this.page1()
        this.btnLoader = false;
      }, 3000);
    }
    

  }
  uplode($event) {
    this.path = $event.target.files[0]
    this.fileName = this.path.name
  }
  addUsers(data,modalParents) {
    this.submit = true;
      this.storage.ref("postimage/"+this.userid).child(this.fileName).put(this.path).then(res => {
        this.storage.ref("postimage/" + this.userid+"/" + this.fileName).getDownloadURL().subscribe(url => {
          data.avatar = url
          console.log(url);
          
          firebase.database().ref("post/").push().set(data).then(() => {
            setTimeout(() => {
              this.page1()
              this.submit = false;
              modalParents.hide()
            }, 20)
            
          })
        })
  
      }).catch(err=>{
        this.submit = false;
        return err
      })

    // this.submit = true;
    //   this.storage.ref("image/"+this.userid).child(this.fileName).put(this.path).then(res => {
    //     this.storage.ref("image/" + this.userid+"/" + this.fileName).getDownloadURL().subscribe(url => {
    //       data.avatar = url
    //       console.log(url);
          
    //       firebase.database().ref("user/").push().set(data).then(() => {
    //         setTimeout(() => {
    //           this.page1()
    //           this.submit = false;
    //           modalParents.hide()
    //         }, 20)
            
    //       })
    //     })
  
    //   })
      
    
    
    
  }


  page1() {
    const arr: any[] = []
    this.service.getUserList().pipe(map((resdata: any) => {
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
        this.userList = res
      })
  }


  stats(contryID) {
    this.service.stats().subscribe((stats: any[]) => {
      // this.statss = stats.slice(0,1000)

      let user = stats.filter(data => contryID == data.country_id)
      this.statss = user
      console.log(user);
      console.log(contryID);
      // debugger;
    })
  }
  city(statID) {
    this.service.city().subscribe((citys: any[]) => {
      let user = citys.filter(data => statID == data.state_id)

      this.citys = user
      console.log(user);
    })


  }



}
