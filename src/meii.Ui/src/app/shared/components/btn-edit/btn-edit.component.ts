import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements OnInit {
  @Input() details: {
    name,
    link,
  };

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
