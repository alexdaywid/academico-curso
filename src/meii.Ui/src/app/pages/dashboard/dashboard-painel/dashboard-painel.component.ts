import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-painel',
  templateUrl: './dashboard-painel.component.html',
  styleUrls: ['./dashboard-painel.component.css']
})
export class DashboardPainelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

}
