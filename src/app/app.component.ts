import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'My To Do list APP';
}
