import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ShiftService } from '../shift.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Shift } from '../../models/shift';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  shifts: Shift[];
  shift: Shift;
  // init material
  displayedColumns = ['id', 'stylist_name', 'date', 'status', 'actions'];
  dataSource = new MatTableDataSource<Shift>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private shiftService: ShiftService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddShiftComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Shift[],
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
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
  ngOnInit() {
    this.getShiftsFromService();
    this.dataSource = new MatTableDataSource<Shift>(this.shifts);
    this.dataSource.paginator = this.paginator;
  }
  getShiftsFromService() {
    this.shiftService.getShifts().subscribe(
      api => {
        this.shifts = api.data;
        console.log('dcm');
        this.dataSource = new MatTableDataSource<Shift>(this.shifts);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
