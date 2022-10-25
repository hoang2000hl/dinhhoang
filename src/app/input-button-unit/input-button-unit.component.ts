import {Component,Output, OnInit,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
// export class InputButtonUnitComponent implements OnInit {
//   title: string = ""
//   @Output() submit: EventEmitter<string> = new EventEmitter<string>();
//   constructor() { }
//   changeTitle(newTitle: string): void {
//     this.submit.emit(newTitle);
//   }
//   submitValue(newTitle: string) {
//     this.submit.emit(newTitle);
//     console.log(newTitle);
    
//   }
//   ngOnInit(): void {
//   }

// }


export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
