import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "./app-routing.module";
import { BolierplateComponent } from './bolierplate/bolierplate.component';
import { AutoUnsubscribeBaseComponentComponent } from './auto-unsubscribe-base-component/auto-unsubscribe-base-component.component';
import { AutoUnsubscribeComponent } from './auto-unsubscribe-base-component/auto-unsubscribe/auto-unsubscribe.component';
import { UntilDestroyDecoratorComponent } from './until-destroy-decorator/until-destroy-decorator.component';
import { CustomDecoratorComponent } from './custom-decorator/custom-decorator.component';
import { OperatorsComponent } from './operators/operators.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    BolierplateComponent,
    AutoUnsubscribeBaseComponentComponent,
    AutoUnsubscribeComponent,
    UntilDestroyDecoratorComponent,
    CustomDecoratorComponent,
    OperatorsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
