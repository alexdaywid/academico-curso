import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-btn-create',
  templateUrl: './btn-create.component.html',
  styleUrls: ['./btn-create.component.css']
})
export class BtnCreateComponent implements OnInit {

  @Input() details: {
    name,
    link,
  };
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  redirecionar(linkRouter: string) {
    this.router.navigateByUrl(linkRouter);
  }

}
