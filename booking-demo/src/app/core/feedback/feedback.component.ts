import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { FeedbackService } from '../feedback.service';
import { ToastsManager } from 'ng2-toastr';

import { API } from '../models/API';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  subject:string;
  messages:string;

  constructor(public feedbackService:FeedbackService,public toastr: ToastsManager,
    public _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr)
  }

  ngOnInit() {
  }
  
  // customerName:string;
  // phoneNumber:string;

  addFeedBack(){
    this.feedbackService.addFeedback(this.subject, this.messages).subscribe(
      (api:API) => {
        if(api.success === true){
          this.toastr.success('Gửi phản hồi thành công');
        }
      },
      error => { console.log(error); return }
    );
  }
}
