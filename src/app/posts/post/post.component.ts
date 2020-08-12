import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../shared/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

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
