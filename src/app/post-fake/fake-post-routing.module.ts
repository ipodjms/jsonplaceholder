import { FakeDetailComponent } from './fake-detail/fake-detail.component';
import { FakeListComponent } from './fake-list/fake-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FakeListComponent,
  },
  {
    path: ':id',
    component: FakeDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostfakeModuleRoutingModule {}
