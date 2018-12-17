import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedFile :File =null;
  private galleryUrl ="http://localhost:8000/api/galleries";

  constructor(private http: HttpClient) { }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload(){
    const fd =new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post(this.galleryUrl,fd).subscribe(res =>{
      console.log(res);
    })

  }
  ngOnInit() {
  }

}
