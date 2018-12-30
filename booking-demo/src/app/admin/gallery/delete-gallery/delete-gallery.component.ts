import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete-gallery',
  templateUrl: './delete-gallery.component.html',
  styleUrls: ['./delete-gallery.component.css']
})
export class DeleteGalleryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGalleryComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
