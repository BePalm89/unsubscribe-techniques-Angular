import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsubscribeComponent} from "./auto-unsubscribe/auto-unsubscribe.component";
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-auto-unsubscribe-base-component',
  templateUrl: './auto-unsubscribe-base-component.component.html',
  styleUrls: ['./auto-unsubscribe-base-component.component.css']
})
export class AutoUnsubscribeBaseComponentComponent extends AutoUnsubscribeComponent implements OnInit, OnDestroy {
  //export class AutoUnsubscribeBaseComponentComponent extends AutoUnsubscribeComponent implements OnInit, OnDestroy{
  sub!: Subscription
  counter = 0
  constructor() {
    super()
  }

  ngOnInit(): void {
    this.sub = interval(1000).subscribe(() => {
      this.counter++
      console.log('sub from auto subscribe base component ' + this.counter)}
    )
    this.addSubscriptions(this.sub)
  }

ngOnDestroy() {
   super.ngOnDestroy();
  }

destroy(){
    super.ngOnDestroy();
  }

}
