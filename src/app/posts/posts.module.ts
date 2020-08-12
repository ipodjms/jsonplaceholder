import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
