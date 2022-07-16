import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  counter = 0
  constructor() { }

  ngOnInit(): void {
    //interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
    interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.counter++
      console.log('sub from operators ' + this.counter)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
