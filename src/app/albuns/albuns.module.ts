import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';



@NgModule({
  declarations: [AlbumListComponent, AlbumDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class AlbunsModule { }
