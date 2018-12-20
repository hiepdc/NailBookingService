import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { Collection } from '../models/collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public albums: Array<IAlbum>;
  private _subscription: Subscription;
  public collectionName: string;
  private collectionId: number;
  private collections: Collection[];

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
    private galleryService: GalleryService
  ) { }

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

  getDataFromUrl() {
    this.collectionId = +this.route.snapshot.paramMap.get('collectionId');
    this.collectionName = this.route.snapshot.paramMap.get('collectionName');
    console.log("this.route.snapshot.paramMap:collectionName:  " + this.collectionName);
    console.log("this.route.snapshot.paramMap:collectionId:  " + this.collectionId);
  }

  getGalleryByByIdFromService() {
    this.galleryService.getGalleryById(this.collectionId).subscribe(
      collectionApi => {
        this.collections = collectionApi.data;
        this.albums = [];
        if (this.collections.length) {
          for (let i = 0; i < this.collections.length; i++) {
            const src = this.collections[i].image_link;
            const caption = this.collections[i].caption;
            const thumb = this.collections[i].thumb_link;
            const album = {
              src: src,
              caption: caption,
              thumb: thumb
            };
            this.albums.push(album);
          }
        } else {
          console.log("collection don't have any item");
        }
      }
    );
  }

  ngOnInit() {
    this.getDataFromUrl();
    this.getGalleryByByIdFromService();
  }

}
