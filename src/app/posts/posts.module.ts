import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PostListComponent, PostDetailComponent, PostComponent],
  imports: [
    CommonModule, PostsRoutingModule, SharedModule
  ]
})
export class PostsModule { }
