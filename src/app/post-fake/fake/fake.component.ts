import { PostFake } from './../shared/postFake';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/posts/shared/post';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss']
})
export class FakeComponent implements OnInit {

  @Input() postFake: PostFake;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public navigateToDetail(post: Post): void {
    this.router.navigate([ post.id], {
      replaceUrl: false,
      relativeTo: this.activatedRoute
    });
  }

}
