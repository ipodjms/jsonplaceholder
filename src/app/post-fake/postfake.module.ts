import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeListComponent } from './fake-list/fake-list.component';
import { FakeDetailComponent } from './fake-detail/fake-detail.component';
import { FakeComponent } from './fake/fake.component';
import { SharedModule } from '../shared/shared.module';
import { PostfakeModuleRoutingModule } from './fake-post-routing.module';



@NgModule({
  declarations: [
    FakeListComponent,
    FakeDetailComponent,
    FakeComponent
  ],
  imports: [
    CommonModule, PostfakeModuleRoutingModule, SharedModule
  ]
})
export class PostfakeModule { }
