import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { ObserableComponent } from './obserable/obserable.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ColdToWarmObservableComponent } from './cold-to-warm-observable/cold-to-warm-observable.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromEventPatternComponent } from './from-event-pattern/from-event-pattern.component';
import { RangeComponent } from './range/range.component';
import { IifComponent } from './iif/iif.component';
import { InervalComponent } from './inerval/inerval.component';
import { TimerComponent } from './timer/timer.component';
import { DeferComponent } from './defer/defer.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { AjaxComponent } from './ajax/ajax.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { ZipComponent } from './zip/zip.component';
import { PartitionComponent } from './partition/partition.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { RaceComponent } from './race/race.component';
import { MapComponent } from './map/map.component';
import { ScanComponent } from './scan/scan.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { SwitchAllComponent } from './switch-all/switch-all.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { CombineLatestAllComponent } from './combine-latest-all/combine-latest-all.component';
import { StartWithComponent } from './start-with/start-with.component';
import { FilterComponent } from './filter/filter.component';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';
import { SingleComponent } from './single/single.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { SkipComponent } from './skip/skip.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { DistinctComponent } from './distinct/distinct.component';
import { DisitinctUntilChangedComponent } from './disitinct-until-changed/disitinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';

const appRoutes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'obserable', component: ObserableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behaviorSubject', component: BehaviorSubjectComponent },
  { path: 'replaySubject', component: ReplaySubjectComponent },
  { path: 'asyncSubject', component: AsyncSubjectComponent },
  { path: 'coldTowarm', component: ColdToWarmObservableComponent },
  { path: 'ofComponent', component: OfComponent },
  { path: 'fromComponent', component: FromComponent },
  { path: 'fromEventComponent', component: FromEventComponent },
  { path: 'fromEventPatternComponent', component: FromEventPatternComponent },
  { path: 'rangeComponent', component: RangeComponent },
  { path: 'iifComponent', component: IifComponent },
  { path: 'inervalComponent', component: InervalComponent },
  { path: 'timerComponent', component: TimerComponent },
  { path: 'deferComponent', component: DeferComponent },
  { path: 'throwErrorComponent', component: ThrowErrorComponent },
  { path: 'ajaxComponent', component: AjaxComponent },
  { path: 'concatComponent', component: ConcatComponent },
  { path: 'mergeComponent', component: MergeComponent },
  { path: 'zipComponent', component: ZipComponent },
  { path: 'partitionComponent', component: PartitionComponent },
  { path: 'combineLatestComponent', component: CombineLatestComponent },
  { path: 'forkjoinComponent', component: ForkjoinComponent },
  { path: 'raceComponent', component: RaceComponent },
  { path: 'mapComponent', component: MapComponent },
  { path: 'scanComponent', component: ScanComponent },
  { path: 'pairwiseComponent', component: PairwiseComponent },
  { path: 'switchMapComponent', component: SwitchMapComponent },
  { path: 'concatMapComponent', component: ConcatMapComponent },
  { path: 'mergeMapComponent', component: MergeMapComponent },
  { path: 'exhaustMapComponent', component: ExhaustMapComponent },
  { path: 'switchAllComponent', component: SwitchAllComponent },
  { path: 'concatAllComponent', component: ConcatAllComponent },
  { path: 'mergeAllComponent', component: MergeAllComponent },
  { path: 'combineLatestAllComponent', component: CombineLatestAllComponent },
  { path: 'startWithComponent', component: StartWithComponent },
  { path: 'filterComponent', component: FilterComponent },
  { path: 'firstComponent', component: FirstComponent },
  { path: 'lastComponent', component: LastComponent },
  { path: 'singleComponent', component: SingleComponent },
  { path: 'takeUntilComponent', component: TakeUntilComponent },
  { path: 'takeWhileComponent', component: TakeWhileComponent },
  { path: 'takeWhileComponent', component: TakeWhileComponent },
  { path: 'skipComponent', component: SkipComponent },
  { path: 'skipLastComponent', component: SkipLastComponent },
  { path: 'skipUntilComponent', component: SkipUntilComponent },
  { path: 'skipWhileComponent', component: SkipWhileComponent },
  { path: 'distinctComponent', component: DistinctComponent },
  {
    path: 'disitinctUntilChangedComponent',
    component: DisitinctUntilChangedComponent
  },
  {
    path: 'distinctUntilKeyChangedComponent',
    component: DistinctUntilKeyChangedComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {}
