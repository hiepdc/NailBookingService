import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Stylist } from '../../../models/stylist';
import { StylistService } from '../../stylist.service';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  public ownerForm: FormGroup;
  file: File;
  url: string;
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stylist,
    private stylistService: StylistService
  ) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      stylist_name: new FormControl('', [Validators.required]),
      phone_number: new FormControl('',
        [
          Validators.required,
          // Validators.pattern('(03|09|07|08|05)+([0-9]{8})\b')
        ]),
      information: new FormControl('', []),
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
