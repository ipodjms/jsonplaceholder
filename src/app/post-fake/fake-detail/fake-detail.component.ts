import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/posts/shared/post';
import { PostService } from 'src/app/posts/shared/post.service';
import { PostFake } from '../shared/postFake';

@Component({
  selector: 'app-fake-detail',
  templateUrl: './fake-detail.component.html',
  styleUrls: ['./fake-detail.component.scss']
})
export class FakeDetailComponent implements OnInit {

  @Input() postFake: PostFake;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const postId = this.getUrlsParams();
    if (!!postId) {
      this.getPostDetail(postId);
    }
  }

  private getUrlsParams(): string {
    return this.activatedRoute.snapshot.params.id;
  }

  private getPostDetail(postId: string): void {
    this.postService.get(postId).subscribe(post => {
      console.log (post);
      this.postFake = post;
      console.log ('meu conteudo da internet', post);
    });
  }

}
