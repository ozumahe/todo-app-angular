import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../models/Todos';

interface TodoList {
  id: number;
  todo: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todos: Todos[];

  textInput: '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, content: 'I am the ma', completed: true },
      { id: 2, content: 'I am the ma', completed: false },
      { id: 3, content: 'I am the ma', completed: false },
      { id: 4, content: 'I am the ma', completed: false },
    ];
  }

  // @Input() todolist : TodoList

  remove(id: number): void {
    console.log(id);
    const filterList = this.todos.filter((data) => data.id !== id);

    this.todos = [...filterList];
  }

  toggleComplete(i: number): void {
    this.todos.map((data) => {
      if (data.id === i) {
        data.completed = !data.completed;
      }

      return data;
    });
  }

  addtodo(): void {
    this.todos.push({
      id: this.todos.length + 1,
      content: this.textInput,
      completed: false,
    });
    this.textInput = '';
  }
}
