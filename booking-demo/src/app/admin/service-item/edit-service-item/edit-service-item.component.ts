import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServiceItem } from '../../models/serviceItem';
import { ServicesService } from '../../service/services.service';
import { Service } from '../../models/service';
@Component({
  selector: 'app-edit-service-item',
  templateUrl: './edit-service-item.component.html',
  styleUrls: ['./edit-service-item.component.css']
})
export class EditServiceItemComponent implements OnInit {
  services: Service[];
  public ownerForm: FormGroup;
  // formControl = new FormControl('', [
  //   Validators.required
  //   // Validators.email,
  // ]);
  constructor(public dialogRef: MatDialogRef<EditServiceItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceItem,
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      service: new FormControl('',
        [
          Validators.required,
          // Validators.pattern('(03|09|07|08|05)+([0-9]{8})\b')
        ]),
      price: new FormControl('', [Validators.required])
    });
    this.getServiceFromService();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  getServiceFromService() {
    this.servicesService.getServices().subscribe(
      api => {
        this.services = api.data;
      }
    );
  }
  // getErrorMessage() {
  //   return this.formControl.hasError('required') ? 'Required field' :
  //     this.formControl.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
