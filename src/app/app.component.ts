import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeId: number = 1;

  subItemMouseClick(id){
    this.activeId = id;
  }

  getCustomWidth(id):string{
    if(id == this.activeId){
      return "200px"
    }
    return "";
  }
}
