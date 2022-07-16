import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {AutoUnsubscribe} from "./decorator/decorator.component";



@AutoUnsubscribe
@Component({
  selector: 'app-custom-decorator',
  templateUrl: './custom-decorator.component.html',
  styleUrls: ['./custom-decorator.component.css']
})
export class CustomDecoratorComponent implements OnInit {
    sub!: Subscription
  constructor() { }

  ngOnInit(): void {
    this.sub = interval(1000).subscribe(value => {
      console.log('sub from custom decorator ' + value)
    })
  }

}
