import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menu:Array<String>=["Home","About Us","Contact us","Map"];
  @Output() menuSelected=new EventEmitter<void>();

  cold_observable=Observable.create((observer:any)=>{
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
  }).pipe(share());//to convert cold observable to hot observable
  subscription1:Subscription;
  subscription2:Subscription;
  OnMenuClicked(event){
    console.log(event.target.text);
    this.menuSelected.emit(event.target.text);
  }
  constructor(private usersService:UsersService) { }

  ngOnInit() {
    setTimeout(() => {
      this.subscription1=this.cold_observable.subscribe(value=>console.log("a"+value));
    }, 0);
    setTimeout(() => {
      this.subscription2=this.cold_observable.subscribe(value=>console.log("b"+value));
    }, 2500);
    setInterval(()=>{
      this.usersService.userActivated.next(Math.ceil(Math.random()*10)+"");
    },1000);
  }
  ngOnDestroy(){
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
  
}
