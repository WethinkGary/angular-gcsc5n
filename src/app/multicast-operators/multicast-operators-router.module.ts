import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectableComponent } from './connectable/connectable.component';
import { ShareComponent } from './share/share.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { MulticastOperatorsComponent } from './multicast-operators.component';

const multicastOperatorRoutes: Routes = [
  {
    path: '',
    component: MulticastOperatorsComponent,
    children: [
      { path: 'connectableComponent', component: ConnectableComponent },
      { path: 'shareComponent', component: ShareComponent },
      { path: 'shareReplayComponent', component: ShareReplayComponent },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(multicastOperatorRoutes)],
  exports: [RouterModule],
  declarations: [
    MulticastOperatorsComponent,
    ConnectableComponent,
    ShareComponent,
    ShareReplayComponent,
  ],
})
export class MulticastOperatorsRouterModule {}
