import { Todo, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[];
  private updateSubscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.updateSubscription = this.todoService.getTodos().subscribe(res => {
                            this.todos = res;
                          });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
