import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularConcepts';
  receivedMenu:String;
  menuReceived(menu){
    console.log("menu received "+menu);
    this.receivedMenu=menu;
  }
}
