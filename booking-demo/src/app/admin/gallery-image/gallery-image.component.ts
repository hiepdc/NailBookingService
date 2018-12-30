import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Gallery } from '../models/gallery';
import { GalleryService } from '../gallery/gallery.service';
import { Image } from '../models/image';
import { AddGalleryImageComponent } from './add-gallery-image/add-gallery-image.component';
import { EditGalleryImageComponent } from './edit-gallery-image/edit-gallery-image.component';
import { DeleteGalleryImageComponent } from './delete-gallery-image/delete-gallery-image.component';
@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent implements OnInit {

  images: Image[];
  image: Image;
  // init material
  displayedColumns = ['id', 'name', 'caption', 'thumb_link', 'image_link', 'actions'];
  dataSource = new MatTableDataSource<Image>(this.images);
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
    this.getImagesFromService();
  }
  // CRUD function
  getImagesFromService() {
    this.galleryService.getImages().subscribe(
      api => {
        this.images = api.data;
        this.dataSource = new MatTableDataSource<Image>(this.images);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  addNew(image: Image) {
    const dialogRef = this.dialog.open(AddGalleryImageComponent,
      {
        width: '500px',
        data: {image: image}
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.caption) {
          result.caption = '';
        }
        this.galleryService.addImage(result.gallery_id, result.caption, result.thumb_link, result.image_link).subscribe(
          api => {
            console.log(api);
            if (api.data === null) {
              this.getImagesFromService();
              this.toastr.error(api.message);
            } else {
              this.getImagesFromService();
              this.toastr.success('Thêm ảnh thành công');
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

  EditItem(id: number, name: string, caption: string, thumb_link: string, image_link: string) {
    const dialogRef = this.dialog.open(EditGalleryImageComponent,
      {
        width: '500px',
        data: {
          id: id,
          name: name,
          caption: caption,
          thumb_link: thumb_link,
          image_link: image_link
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.caption) {
          result.caption = '';
        }
        this.galleryService.editImage(result.id, result.gallery_id, result.caption, result.thumb_link, result.image_link).subscribe(
          api => {
            if (api.data === null) {
              this.getImagesFromService();
              this.toastr.error(api.message);
            } else {
              this.getImagesFromService();
              this.toastr.success('Chỉnh sửa ảnh thành công');
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
    const dialogRef = this.dialog.open(DeleteGalleryImageComponent,
      {
        width: '300px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.galleryService.deleteImage(id).subscribe(
          api => {
            this.getImagesFromService();
            this.toastr.warning('Xóa ảnh thành công');
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
