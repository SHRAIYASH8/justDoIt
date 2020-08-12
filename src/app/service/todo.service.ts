import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ToDo } from './../model/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ToDo[];
  constructor() { 
    this.todos = [
      {
        id:"111",
        title:"Online Assessment",
        isComplete:true,
        date: new Date()
      },
      {
        id:"222",
        title:"Bike Dry Servicing",
        isComplete:false,
        date: new Date()
      }
  ];
  }

  getTodos(){
    return of(this.todos);
  }

  addTodos(todo:ToDo){
    this.todos.push(todo);
  }

  changeStatus(todo:ToDo){
    this.todos.map( singleTodo => {
      if(singleTodo.id === todo.id)
        todo.isComplete=!todo.isComplete;
    });
  }

  deleteTodo(todo:ToDo){
    const indexOfTodo = this.todos.findIndex( 
      (currentObj) => currentObj.id==todo.id
    );
    this.todos.splice(indexOfTodo,1);
  }
}
