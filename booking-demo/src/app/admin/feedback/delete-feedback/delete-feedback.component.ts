import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-feedback',
  templateUrl: './delete-feedback.component.html',
  styleUrls: ['./delete-feedback.component.css']
})
export class DeleteFeedbackComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
