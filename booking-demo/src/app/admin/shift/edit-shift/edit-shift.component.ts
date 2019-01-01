import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Shift } from '../../models/shift';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css']
})
export class EditShiftComponent implements OnInit {
  public ownerForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditShiftComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Shift,
    ) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      stylist_name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
  }
}
