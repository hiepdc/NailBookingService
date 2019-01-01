import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Feedback } from '../models/feedback';
import { FeedbackService } from './feedback.service';
import { DeleteFeedbackComponent } from './delete-feedback/delete-feedback.component';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;
  feedbacks: Feedback[];
   // init material
   displayedColumns = ['id', 'title', 'content', 'actions'];
   dataSource = new MatTableDataSource<Feedback>(this.feedbacks);
   @ViewChild(MatPaginator) paginator: MatPaginator;
   applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
   constructor(
    private feedbackService: FeedbackService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getFeedbacksFromService();
  }
    // CRUD function
    getFeedbacksFromService() {
      this.feedbackService.getFeedbacks().subscribe(
        api => {
          this.feedbacks = api.data;
          this.dataSource = new MatTableDataSource<Feedback>(this.feedbacks);
          this.dataSource.paginator = this.paginator;
        }
      );
    }

    deleteItem(id: number) {
      const dialogRef = this.dialog.open(DeleteFeedbackComponent,
        {
          width: '300px',
          data: {
            id: id
          }
        }
      );

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.feedbackService.delelteFeedback(id).subscribe(
            api => {
              console.log(api);
              console.log(api.message);
              if (api.data === null) {
                this.getFeedbacksFromService();
                this.toastr.error(api.message);
              } else {
                this.getFeedbacksFromService();
                this.toastr.warning('Xóa phản hồi thành công');
              }
            },
            error => {
              this.toastr.error(error);
              return;
            }
          );
        }
      });
    }

}
