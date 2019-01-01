import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Gallery } from '../models/gallery';
import { GalleryService } from './gallery.service';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';
import { DeleteGalleryComponent } from './delete-gallery/delete-gallery.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleries: Gallery[];
  gallery: Gallery;
  // init material
  displayedColumns = ['id', 'name', 'image_link', 'actions'];
  dataSource = new MatTableDataSource<Gallery>(this.galleries);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // end init material
  constructor(
    private galleryService: GalleryService,
    public toastr: ToastsManager,
    _vcr: ViewContainerRef,
    public dialog: MatDialog
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getGalleriesFromService();
  }

  // CRUD function
  getGalleriesFromService() {
    this.galleryService.getGalleries().subscribe(
      api => {
        this.galleries = api.data;
        this.dataSource = new MatTableDataSource<Gallery>(this.galleries);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  addNew(gallery: Gallery) {
    const dialogRef = this.dialog.open(AddGalleryComponent,
      {
        width: '500px',
        data: {gallery: gallery}
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.galleryService.addGallery(result.name, result.image_link).subscribe(
          api => {
            console.log(api);
            if (api.data === null) {
              this.getGalleriesFromService();
              this.toastr.error(api.message);
            } else {
              this.getGalleriesFromService();
              this.toastr.success('Thêm bộ sưu tập thành công');
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

  EditItem(id: number, name: string, image_link: string) {
    const dialogRef = this.dialog.open(EditGalleryComponent,
      {
        width: '500px',
        data: {
          id: id,
          name: name,
          image_link: image_link
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.galleryService.editGallery(result.id, result.name, result.image_link).subscribe(
          api => {
            if (api.data === null) {
              this.getGalleriesFromService();
              this.toastr.error(api.message);
            } else {
              this.getGalleriesFromService();
              this.toastr.success('chỉnh sửa bộ sưu tập thành công');
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
    const dialogRef = this.dialog.open(DeleteGalleryComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.galleryService.delelteGallery(id).subscribe(
          api => {
            if (api.data === null) {
              this.getGalleriesFromService();
              this.toastr.error(api.message);
            } else {
              this.getGalleriesFromService();
              this.toastr.warning('Xóa bộ sưu tập thành công');
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
