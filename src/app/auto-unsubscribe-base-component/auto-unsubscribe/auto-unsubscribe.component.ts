import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auto-unsubscribe',
  templateUrl: './auto-unsubscribe.component.html',
  styleUrls: ['./auto-unsubscribe.component.css']
})
export class AutoUnsubscribeComponent implements OnDestroy {
  protected subscriptions: Subscription[] = [];
  constructor() { }

  public ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  public addSubscriptions(...subs: Subscription[]) {
    this.subscriptions.push(...subs);
  }
}
