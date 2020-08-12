import { PostService } from './../shared/post.service';
import { Component, OnInit, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Post } from '../shared/post';
import { ListBaseComponent } from 'src/app/core/list-base';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent extends ListBaseComponent<Post, PostService> implements OnInit {
  constructor(injector: Injector, service: PostService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
  }

  ngOnInit() {
    super.ngOnInit();
   }

}
