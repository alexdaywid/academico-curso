import { ItensDetails } from './../../model/itensDetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

 @Input() itensMenuList: ItensDetails[];
  constructor() { }

  ngOnInit() {
  }

}
