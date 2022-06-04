import { PostFakeService } from './../shared/post-fake.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { PostFake } from '../shared/postFake';
import { ListBaseComponent } from 'src/app/core/list-base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.scss']
})

export class FakeListComponent extends ListBaseComponent<PostFake, PostFakeService> implements OnInit {

  constructor(injector: Injector, service: PostFakeService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
  }

  ngOnInit(): void {
    this.loadList();
  }

}
