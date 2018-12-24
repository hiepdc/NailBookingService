import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Stylist } from '../../../models/stylist';
import { StylistService } from '../../stylist.service';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  file: File;
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stylist,
    private stylistService: StylistService
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
  getFiles(event) {
    //  this.data.image_link = event.srcElement.files[0];
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.data.image_link = file;
    }
  }
}
