import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  albImage: any[]
  user: any;
  isload: boolean = false;
  constructor(private service: ApiService) { }

  albums: any[]
  ngOnInit() {
    this.service.getUser().subscribe((user: any[]) => {
      this.user = user;

      this.service.getAlbums().subscribe((albums: any[]) => {
        this.albImage = albums;
        this.isload = true;
      })

    })

  }









}
