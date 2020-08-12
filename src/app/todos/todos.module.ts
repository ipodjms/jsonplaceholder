import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosRoutingModule } from './todos-routing.module';



@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule, TodosRoutingModule
  ]
})
export class TodosModule { }
