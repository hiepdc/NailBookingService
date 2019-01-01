import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ShiftService } from '../shift.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { Shift } from '../../models/shift';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { StylistService } from '../../stylist/stylist.service';
import { Stylist } from '../../models/stylist';
import { AddShift } from '../../models/addShift';
import { AddDialog } from '../../models/addDialog';
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
  stylists: Stylist[];
  addShifts: Array<AddShift> = [];
  selectedDate = new Date();
  today = new Date();
  minDate = new Date();
  // addShift: AddShift;
  // init material
  displayedColumns = ['id', 'stylist_name', 'date', 'status', 'actions'];
  // dataSource = new MatTableDataSource<Shift>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private shiftService: ShiftService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddShiftComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddDialog,
    private stylistService: StylistService
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  getStylistFromService() {
    this.stylistService.getStylists().subscribe(
      api => {
        this.stylists = api.data;
        for (let stylist of this.stylists) {
          let addShift = new AddShift();
          addShift.stylist_id = stylist.id;
          addShift.stylist_name = stylist.stylist_name;
          addShift.date = '';
          addShift.start_time = 0;
          addShift.end_time = 0;
          addShift.status = 0;
          console.log(addShift);
          this.addShifts.push(addShift);
        }
      },
      error => {
        console.log(error);
        return;
      }
    );
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.getShiftsFromService();
    this.minDate = new Date(this.today.setDate(this.today.getDate() + 3));
    // this.getStylistFromService();
    // this.dataSource = new MatTableDataSource<Shift>(this.shifts);
    // this.dataSource.paginator = this.paginator;
  }
 
  getShiftsFromService() {
    this.shiftService.getShifts().subscribe(
      api => {
        this.shifts = api.data;
      }
    );
  }
  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   for(let addShift of this.data.addShifts){
  //       addShift.date = 
  //   }
  // }

}
