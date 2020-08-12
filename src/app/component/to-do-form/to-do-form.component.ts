import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  todoTitle : String;
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000 + "";
    const newTodo:ToDo = {
      id:random,
      title:this.todoTitle,
      date:new Date(),
      isComplete:false
    }

    this.todoService.addTodos(newTodo);
    this.todoTitle = "";
  }

}
