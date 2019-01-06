import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  dataReceived:String="";
  dataSubscription:Subscription;
  @Input() menuReceived:String;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe((data)=>{
      this.dataReceived+=" "+data;
    });
  }
  ngOnDestroy(){
    this.dataSubscription.unsubscribe();
  }
}
