import { PostService } from './../shared/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  @Input() post: Post;


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const postId = this.getUrlsParams();
    if (!!postId) {
      this.postService.get(postId).subscribe(post => {
        console.log (post);
        this.post = post;
      });
    }
  }

  getUrlsParams() {
    return this.activatedRoute.snapshot.params.id;
  }
}
