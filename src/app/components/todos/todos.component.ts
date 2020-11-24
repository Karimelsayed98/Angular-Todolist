import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  // like useEffect and ComponentDidMount()
  ngOnInit(): void {
   this.todoService.getTodos().subscribe(todos => {
     this.todos = todos;
   });
  }
  
  deleteTodo(todo: Todo) {
   this.todos = this.todos.filter(todoItem => todoItem.id !== todo.id);
   this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
