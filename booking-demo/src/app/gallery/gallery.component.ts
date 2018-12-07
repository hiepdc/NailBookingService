import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { LoaderService } from '../core';
import { Gallery } from '../models/gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private galleries:Gallery[];
  
  constructor(
    public loaderService: LoaderService,
    private galleryService:GalleryService
  ) { }

  ngOnInit() {
    this.getGalleriesFromService();
  }

  getGalleriesFromService(): void {
    this.galleryService.getAllGalleries().subscribe(
      galleryApi => this.galleries = galleryApi.data
    );
  }

  //add gallery to service
  addGalleyId(){
    
  }

}
