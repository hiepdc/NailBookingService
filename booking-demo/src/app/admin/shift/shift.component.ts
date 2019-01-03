import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ShiftService } from './shift.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Shift } from '../models/shift';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { DeleteShiftComponent } from './delete-shift/delete-shift.component';
import { AddShift } from '../models/addShift';
import { StylistService } from '../stylist/stylist.service';
import { Stylist } from '../models/stylist';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  shifts: Shift[];
  shift: Shift;
  addShifts: Array<AddShift> = [];
  stylists: Stylist[];
  today = new Date();
  date = new Date(this.today.setDate(this.today.getDate() + 3));
  // init material
  displayedColumns = ['id', 'stylist_name', 'date', 'status', 'actions'];
  dataSource = new MatTableDataSource<Shift>(this.shifts);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog,
    private shiftService: ShiftService,
    private stylistService: StylistService

  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getShiftsFromService();
    this.getStylistFromService();
  }
  getShiftsFromService() {
    this.shiftService.getShifts().subscribe(
      api => {
        this.shifts = api.data;
        this.dataSource = new MatTableDataSource<Shift>(this.shifts);
        this.dataSource.paginator = this.paginator;
      }
    );
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
          this.addShifts.push(addShift);
        }
      },
      error => {
        console.log(error);
        return;
      }
    );
  }

  formatDateYYYYmmdd(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  addNew() {
    const dialogRef = this.dialog.open(AddShiftComponent,
      {
        width: '500px',
        data: {
          addShifts: this.addShifts,
          date: this.date
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        const date = this.formatDateYYYYmmdd(result.date);
      for (let addShift of result.addShifts) {
        if (addShift.status === '0') {
          addShift.start_time = 0;
          addShift.end_time = -1;
          addShift.date = date;
        } else if (addShift.status === '1') {
          addShift.start_time = 0;
          addShift.end_time = 23;
          addShift.date = date;
        } else if (addShift.status === '2') {
          addShift.start_time = 24;
          addShift.end_time = 47;
          addShift.date = date;
        } else {
          addShift.start_time = 0;
          addShift.end_time = 47;
          addShift.date = date;
        }
      }
      this.shiftService.addShift(result.addShifts).subscribe(
        api => {
           if (api.data === null) {
              this.getShiftsFromService();
              this.toastr.error(api.message);
            } else {
              this.getShiftsFromService();
              this.toastr.success(api.message);
            }
        },
        error => {
          console.log(error);
          return;
        }
      );
      }
    });
  }

  EditItem(id: number, stylist_name: string, date: string, status: string) {
    const dialogRef = this.dialog.open(EditShiftComponent,
      {
        width: '500px',
        data: {
          id: id,
          stylist_name: stylist_name,
          date: date,
          status: status
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(result.status === '1'){
          result.start_time = 0;
          result.end_time = 23;
        }else if(result.status === '2'){
          result.start_time = 24;
          result.end_time = 47;
        }else if(result.status === '3'){
          result.start_time = 0;
          result.end_time = 47;
        }else{
          result.start_time = 0;
          result.end_time = -1;
        }
        console.log(result);
        this.shiftService.editShift(result.id, result.start_time, result.end_time).subscribe(
          api => {
            if (api.data === null) {
              this.getShiftsFromService();
              this.toastr.error(api.message);
            } else {
              this.getShiftsFromService();
              this.toastr.success(api.message);
            }
          },
          error => {
            console.log(error);
            return;
          }
        );
      }
    });
  }

  deleteItem(id: number) {
    const dialogRef = this.dialog.open(DeleteShiftComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.shiftService.delelteShift(id).subscribe(
          api => {
            if (api.data === null) {
              this.getShiftsFromService();
              this.toastr.error(api.message);
              // alert(api.message);
            } else {
              this.getShiftsFromService();
              this.toastr.success(api.message);
            }
          },
          error => {
            console.log(error);
            return;
          }
        );
      }
    });
  }
}
