import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { FeedbackService } from '../feedback.service';
import { ToastsManager } from 'ng2-toastr';
import { LoaderService } from '../http-handle';

import { API } from '../models/API';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  title: string;
  contents: string;

  constructor(
    public feedbackService: FeedbackService, 
    public toastr: ToastsManager,
    public _vcr: ViewContainerRef,
    public loaderService: LoaderService) {
    this.toastr.setRootViewContainerRef(_vcr)
  }

  ngOnInit() {
  }

  // customerName:string;
  // phoneNumber:string;

  addFeedBack() {
    this.feedbackService.addFeedback(this.title, this.contents).subscribe(
      (api:API) => {
          this.toastr.success('Gửi phản hồi thành công');
      },
      error => { console.log(error); return; }
    );
  }
}