import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete-gallery-image',
  templateUrl: './delete-gallery-image.component.html',
  styleUrls: ['./delete-gallery-image.component.css']
})
export class DeleteGalleryImageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGalleryImageComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
