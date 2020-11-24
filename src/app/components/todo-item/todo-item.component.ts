import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  constructor(private todoService: TodoService) { }
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

  onToggle(todo : Todo):void {
  todo.completed = !todo.completed;
   this.todoService.toggleCompleted(todo).subscribe(todo => {
    console.log('toggled');
  });
  }
  
  onDelete(todo : Todo):void {
   this.deleteTodo.emit(todo);
  }

  // set dynamic classes
  setClasses() {
    let classes = { 
      todo: true,
      'is-complete': this.todo.completed, 
    }
    return classes;
  }
}
