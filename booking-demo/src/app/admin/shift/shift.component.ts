import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ShiftService } from './shift.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Shift } from '../models/shift';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { DeleteShiftComponent } from './delete-shift/delete-shift.component';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  shifts: Shift[];
  shift: Shift;
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
    public dialog: MatDialog
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getShiftsFromService();
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
  addNew(shift: Shift) {
    const dialogRef = this.dialog.open(AddShiftComponent,
      {
        width: '500px',
        data: {shift: shift}
      }
    );

    // dialogRef.afterClosed().subscribe(result => {
    //   this.stylistService.addStylist(result.stylist_name, result.phone_number, result.information, result.image_link).subscribe(
    //     api => {
    //       if (api.data === null) {
    //         this.getStylistFromService();
    //         this.toastr.error(api.message);
    //       } else {
    //         this.getStylistFromService();
    //         this.toastr.success('Thêm stylist thành công');
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //       return;
    //     }
    //   );
    // });
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
