import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public albums: Array<IAlbum>;
  private _subscription: Subscription;
  private collectionName:string;
  private collectionId:number;

  private lightBoxConfig = {
    fadeDuration: 0,
    resizeDuration: 0.4,
    wrapAround: true, showImageNumberLabel: true 
  }

  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    //private _lighboxConfig: LightboxConfig,
    private route: ActivatedRoute,
    private galleryService:GalleryService
  ) {}

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
    // override the default config cách 2
    this._lightbox.open(this.albums, index, this.lightBoxConfig);
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription.unsubscribe();
    }
  }

  getDataFromUrl(){
    this.collectionId = +this.route.snapshot.paramMap.get('collectionId');
    this.collectionName = this.route.snapshot.paramMap.get('collectionName');
    console.log("this.route.snapshot.paramMap:collectionName:  "+this.collectionName);
    console.log("this.route.snapshot.paramMap:collectionId:  "+this.collectionId);
  }

  getCollection(){
    
    this.albums = [];
    for (let i = 1; i <= 8; i++) {
      const src = '../../assets/img/gallery/nail' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../assets/img/gallery/nail' + i + '_tn.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this.albums.push(album);
    }
    // set default config cách 1
    // this._lighboxConfig.fadeDuration = 0;
    // this._lighboxConfig.resizeDuration = 0.4;
  }

  ngOnInit() {
    this.getDataFromUrl();
    this.getCollection();
  }

}
