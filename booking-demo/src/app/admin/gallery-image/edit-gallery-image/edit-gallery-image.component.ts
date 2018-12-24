import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { GalleryService } from '../../gallery/gallery.service';
import { Image } from '../../models/image';
@Component({
  selector: 'app-edit-gallery-image',
  templateUrl: './edit-gallery-image.component.html',
  styleUrls: ['./edit-gallery-image.component.css']
})
export class EditGalleryImageComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  constructor(public dialogRef: MatDialogRef<EditGalleryImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
