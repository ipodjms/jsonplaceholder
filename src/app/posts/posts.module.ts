import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [PostListComponent, PostDetailComponent, PostComponent],
  imports: [
    CommonModule, PostsRoutingModule
  ]
})
export class PostsModule { }
