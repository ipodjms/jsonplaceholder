import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostFake } from '../shared/postFake';

@Component({
  selector: 'app-fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.scss']
})
export class FakeListComponent implements OnInit {

  public list: PostFake[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.getPost();

  }

  private getPost() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {}).subscribe(resp => {
      console.log ('itens do servidor', resp);
      const obj = resp;
      // tslint:disable-next-line:prefer-const
      for (let [key, value] of Object.entries(obj)) {
            this.list.push(value);
        }
      console.log (this.list);
    });
  }

}
