import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  TODOS_URL:string = 'https://jsonplaceholder.typicode.com/todos';
  TODOS_LIMIT = '?_limit=10' 

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.TODOS_URL}${this.TODOS_LIMIT}`);
  }
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.TODOS_URL}/${todo.id}`, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.TODOS_URL}/${todo.id}`, httpOptions);
  }  
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.TODOS_URL, todo, httpOptions);
  }
}
