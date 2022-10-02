import { Component } from '@angular/core';

interface TodoList {
  id: number;
  todo: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todolist: TodoList[] = [
    { id: 1, todo: 'I am the ma', completed: true },
    { id: 2, todo: 'I am the ma', completed: false },
    { id: 3, todo: 'I am the ma', completed: false },
    { id: 4, todo: 'I am the ma', completed: false },
  ];
}
