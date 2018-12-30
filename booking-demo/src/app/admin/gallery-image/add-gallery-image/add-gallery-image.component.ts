import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Image } from '../../models/image';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../gallery/gallery.service';

@Component({
  selector: 'app-add-gallery-image',
  templateUrl: './add-gallery-image.component.html',
  styleUrls: ['./add-gallery-image.component.css']
})
export class AddGalleryImageComponent implements OnInit {
  public ownerForm: FormGroup;
  file: File;
  image_url: string;
  thumb_url: string;
  galleries: Gallery[];
  constructor(
    public dialogRef: MatDialogRef<AddGalleryImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.getGalleryFromService();
    this.ownerForm = new FormGroup({
      gallery_id: new FormControl('', [Validators.required]),
      caption: new FormControl('', []),
      thumb_link: new FormControl('', [Validators.required]),
      image_link: new FormControl('', [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getGalleryFromService() {
    this.galleryService.getGalleries().subscribe(
      api => {
        this.galleries = api.data;
      },
      error => {
        console.log(error);
        return;
      }
    );
  }
  getFilesImage(event) {
    //  this.data.image_link = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
         this.image_url = event.target.result;
      }
      const file = event.target.files[0];
      this.data.image_link = file;
    }
  }

  getFilesThumb(event) {
    //  this.data.image_link = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
         this.thumb_url = event.target.result;
      }
      const file = event.target.files[0];
      this.data.thumb_link = file;
    }
  }

}
