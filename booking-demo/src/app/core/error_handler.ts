import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
 
@Injectable()
export class ErrorHandler {
  public onlineFlag =navigator.onLine;
 
  constructor(
    public snackbar: MatSnackBar,
  ) {}
 
  public handleError(err: any) {
    // this.snackbar.open(err.message, 'close');
    console.log(err.message);
    // if(err.status==401){
    //     window.localStorage.clear();
    // }
    // else if(!this.onlineFlag){
    //   //console.log("Internet connected");
    //   alert("Internet connection lost");
    //   // alert(this.onlineFlag);
    //    window.localStorage.clear();
    // }
  }
}
