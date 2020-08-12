import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { v4 as uuidv4} from 'UUID';
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
    const newTodo:ToDo = {
      id:uuidv4(),
      title:this.todoTitle,
      date:new Date(),
      isComplete:false
    }

    this.todoService.addTodos(newTodo);
    this.todoTitle = "";
  }

}
