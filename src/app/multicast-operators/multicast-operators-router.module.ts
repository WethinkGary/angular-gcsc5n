import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectableComponent } from './connectable/connectable.component';
import { MulticastOperatorsComponent } from './multicast-operators.component';

const multicastOperatorRoutes: Routes = [
  {
    path: '',
    component: MulticastOperatorsComponent,
    children: [
      { path: 'connectableComponent', component: ConnectableComponent },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(multicastOperatorRoutes)],
  exports: [RouterModule],
  declarations: [MulticastOperatorsComponent, ConnectableComponent],
})
export class MulticastOperatorsRouterModule {}
