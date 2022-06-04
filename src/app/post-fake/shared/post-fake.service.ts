import { Injectable, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Post } from 'src/app/posts/shared/post';
import { VERSION_API } from 'src/app/shared/const';
import { PostFake } from './postFake';

@Injectable({
  providedIn: 'root'
})
export class PostFakeService extends HttpService<PostFake> {

  constructor(injector: Injector) {
    super(injector, VERSION_API, 'posts');
  }
}
