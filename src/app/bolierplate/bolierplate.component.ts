import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-bolierplate',
  templateUrl: './bolierplate.component.html',
  styleUrls: ['./bolierplate.component.css']
})
export class BolierplateComponent implements OnInit, OnDestroy {
  counter = 0;
  subscription$!: Subscription

  constructor() { }

  ngOnInit(): void {
   this.subscription$ =  interval(1000).subscribe(
      () => {
        this.counter++
        console.log('Sub from boilerplate ' + this.counter)
      }
    )
  }

ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

  destroy() {
    this.subscription$.unsubscribe()
  }

}
