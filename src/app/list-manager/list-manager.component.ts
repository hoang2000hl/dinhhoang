import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }

  constructor(private todoListService: TodoListService) { }
  addItem(title: string): void {
    this.todoList.push({ title });
    this.todoListService.addItem({ title });
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

}

