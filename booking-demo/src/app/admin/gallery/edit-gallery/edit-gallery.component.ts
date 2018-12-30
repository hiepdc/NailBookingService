import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../gallery.service';
@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {

  public ownerForm: FormGroup;
  file: File;
  url: string;
  constructor(public dialogRef: MatDialogRef<EditGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Gallery,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image_link: new FormControl('', []),
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
  getFiles(event) {
    //  this.data.image_link = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
         this.url = event.target.result;
      }
      const file = event.target.files[0];
      this.data.image_link = file;
    }
  }

}
