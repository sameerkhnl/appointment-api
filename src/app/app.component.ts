import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Subscriber, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  userSubscriber: Subscription;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.userSubscriber = this.userService.fetchUsers().subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }


}
