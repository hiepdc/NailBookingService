import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StylistService } from './stylist.service';
import { ToastsManager } from 'ng2-toastr';
import { Stylist } from '../models/stylist';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  displayedColumns = ['stylist_name', 'phone_number', 'information', 'image_link', 'actions'];
  stylists: Stylist[];
  stylist: Stylist;
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

  getStylistFromService() {
    this.stylistService.getStylists().subscribe(
      api => {
        this.stylists = api.data;
      }
    );
  }

  addNew(stylist: Stylist) {
    const dialogRef = this.dialog.open(AddDialogComponent,
      {
        data: {stylist: stylist}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
      console.log('afterclosed');
      this.getStylistFromService();
      }
    });
  }
}
