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
    private shiftService: ShiftService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog,
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
          date: new Date()
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      result.date = this.formatDateYYYYmmdd(result.date);
      for (let addShift of result.addShifts) {
        if (addShift.status === '0') {
          addShift.start_time = 0;
          addShift.end_time = -1;
          addShift.date = result.date;
        } else if (addShift.status === '1') {
          addShift.start_time = 0;
          addShift.end_time = 23;
          addShift.date = result.date;
        } else if (addShift.status === '2') {
          addShift.start_time = 24;
          addShift.end_time = 47;
          addShift.date = result.date;
        } else {
          addShift.start_time = 0;
          addShift.end_time = 47;
          addShift.date = result.date;
        }
      }
      console.log(result.addShifts);
      this.shiftService.addShift(result.addShifts).subscribe(
        api => {
          if (api.data === null) {
            this.getShiftsFromService();
            this.toastr.error(api.message);
          } else {
            this.getShiftsFromService();
            this.toastr.success('Thêm lịch làm việc thành công');
          }
        },
        error => {
          console.log(error);
          return;
        }
      );
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

    // dialogRef.afterClosed().subscribe(result => {
    //   this.stylistService.editStylist(result.id, result.stylist_name, result.phone_number,
    //     result.information, result.image_link).subscribe(
    //       api => {
    //         if (api.data === null) {
    //           this.getStylistFromService();
    //           this.toastr.error(api.message);
    //         } else {
    //           this.getStylistFromService();
    //           this.toastr.success('Chỉnh sửa stylist thành công');
    //         }
    //       },
    //       error => {
    //         console.log(error);
    //         return;
    //       }
    //     );
    // });
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

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 1) {
    //     this.stylistService.delelteStylist(id).subscribe(
    //       api => {
    //         this.getStylistFromService();
    //         this.toastr.warning('Xóa stylist thành công');
    //       },
    //       error => {
    //         console.log(error);
    //         return;
    //       }
    //     );
    //   }
    // });
  }
}
