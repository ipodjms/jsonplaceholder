import { Injectable, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Post } from './post';
import { VERSION_API } from 'src/app/shared/const';

@Injectable({
  providedIn: 'root'
})
export class PostService extends HttpService<Post> {

  constructor(injector: Injector) {
    super(injector, VERSION_API, 'posts');
  }
}
