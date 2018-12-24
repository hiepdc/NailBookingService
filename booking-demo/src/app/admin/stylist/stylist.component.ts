import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { StylistService } from './stylist.service';
import { ToastsManager } from 'ng2-toastr';
import { Stylist } from '../models/stylist';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  stylists: Stylist[];
  stylist: Stylist;
  // init material
  displayedColumns = ['id', 'stylist_name', 'phone_number', 'information', 'image_link', 'actions'];
  dataSource = new MatTableDataSource<Stylist>(this.stylists);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private stylistService: StylistService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getStylistFromService();
  }
  // CRUD function
  getStylistFromService() {
    this.stylistService.getStylists().subscribe(
      api => {
        this.stylists = api.data;
        this.dataSource = new MatTableDataSource<Stylist>(this.stylists);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  addNew(stylist: Stylist) {
    const dialogRef = this.dialog.open(AddDialogComponent,
      {
        width: '500px',
        data: {stylist: stylist}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.stylistService.addStylist(result.stylist_name, result.phone_number, result.information, result.image_link).subscribe(
        api => {
          if (api.data === null) {
            this.getStylistFromService();
            this.toastr.error(api.message);
          } else {
            this.getStylistFromService();
            this.toastr.success('Thêm stylist thành công');
          }
        },
        error => {
          console.log(error);
          return;
        }
      );
    });
  }

  EditItem(id: number, stylist_name: string, phone_number: string, information: string, image_link: string) {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        width: '500px',
        data: {
          id: id,
          stylist_name: stylist_name,
          phone_number: phone_number,
          information: information,
          image_link: image_link
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.stylistService.editStylist(result.id, result.stylist_name, result.phone_number,
        result.information, result.image_link).subscribe(
          api => {
            if (api.data === null) {
              this.getStylistFromService();
              this.toastr.error(api.message);
            } else {
              this.getStylistFromService();
              this.toastr.success('Chỉnh sửa stylist thành công');
            }
          },
          error => {
            console.log(error);
            return;
          }
        );
    });
  }

  deleteItem(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.stylistService.delelteStylist(id).subscribe(
          api => {
            this.getStylistFromService();
            this.toastr.warning('Xóa stylist thành công');
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
