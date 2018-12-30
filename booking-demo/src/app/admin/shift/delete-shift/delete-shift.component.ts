import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-shift',
  templateUrl: './delete-shift.component.html',
  styleUrls: ['./delete-shift.component.css']
})
export class DeleteShiftComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteShiftComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
