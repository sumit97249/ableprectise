import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/demo/pages/service/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() albums: Array<IAlbum>;
  @Input() users: Array<any>;
  photos: any = [];
  private subscription: Subscription;
  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent, private lighboxConfig: LightboxConfig,
    private service: ApiService) {
    this.albums = this.albums ? this.albums : [];
    lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {


  }

  username(name) {
    const user = this.users.filter(data => data.id == name.userId)
    return user[0].username;
  }

  open(id: number): void {
    this.photos = [];
    this.service.getAlbumsImage(id).subscribe((data: any) => {
      console.log(data)
      data.forEach(element => {

        const photoData = {
          src: element.url,
          caption: element.title,
          thumb: element.thumbnailUrl
        }
        this.photos.push(photoData);
      });
      console.log(this.photos)
      this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
      this.lightbox.open(this.photos, 0, { wrapAround: true, showImageNumberLabel: true });
    })

  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }

}
