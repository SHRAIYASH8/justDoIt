import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { ToDo } from './../../model/ToDo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos: ToDo[];

  constructor(private todoService : TodoService) {  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe( (todos) => {
        this.todos = todos
    });
  }

  changeTodoStatus(todo:ToDo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:ToDo){
    this.todoService.deleteTodo(todo);
  }

  addTodo(todo:ToDo){
    this.todoService.addTodos(todo);
  }
}
