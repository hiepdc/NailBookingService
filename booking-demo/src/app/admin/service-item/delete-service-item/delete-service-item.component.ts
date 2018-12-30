import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete-service-item',
  templateUrl: './delete-service-item.component.html',
  styleUrls: ['./delete-service-item.component.css']
})
export class DeleteServiceItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteServiceItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
