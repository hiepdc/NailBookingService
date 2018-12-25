import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ServiceItem } from '../../models/serviceItem';
import { ServicesService } from '../../service/services.service';
@Component({
  selector: 'app-edit-service-item',
  templateUrl: './edit-service-item.component.html',
  styleUrls: ['./edit-service-item.component.css']
})
export class EditServiceItemComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  constructor(public dialogRef: MatDialogRef<EditServiceItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceItem,
    private servicesService: ServicesService
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
