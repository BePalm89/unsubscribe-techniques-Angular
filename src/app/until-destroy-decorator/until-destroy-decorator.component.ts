import { Component, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {interval, Subscription} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-until-destroy-decorator',
  templateUrl: './until-destroy-decorator.component.html',
  styleUrls: ['./until-destroy-decorator.component.css']
})
export class UntilDestroyDecoratorComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(untilDestroyed(this)).subscribe(value => {
      console.log('sub from the until destroy decorator ' + value)
    })
/*    interval(1000).pipe(untilDestroyed(this)).subscribe(value => {
      console.log('sub from the until destroy decorator ' + value)
    })*/
  }

}
