import { Component, OnInit } from '@angular/core';
import {APP_PATH} from "../shared/app.path.constant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path = APP_PATH; 
  constructor() { }

  ngOnInit() {
  }

}
