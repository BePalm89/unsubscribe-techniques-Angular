import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BolierplateComponent} from "./bolierplate/bolierplate.component";
import {AppComponent} from "./app.component";
import {
  AutoUnsubscribeBaseComponentComponent
} from "./auto-unsubscribe-base-component/auto-unsubscribe-base-component.component";
import {UntilDestroyDecoratorComponent} from "./until-destroy-decorator/until-destroy-decorator.component";
import {CustomDecoratorComponent} from "./custom-decorator/custom-decorator.component";
import {OperatorsComponent} from "./operators/operators.component";

const routes: Routes = [
  {
    path: 'boilerplate',
    component: BolierplateComponent
  },
  {
    path: 'auto-unsubscribe-base-component',
    component: AutoUnsubscribeBaseComponentComponent
  },
  {
    path: 'until-destroy-decorator',
  component: UntilDestroyDecoratorComponent
  },
  {
    path: 'custom-decorator',
    component: CustomDecoratorComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
