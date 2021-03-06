import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AppRouterModule } from './app-router.module';
import { RouterModule } from '@angular/router';
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
import { SampleTimeComponent } from './sample-time/sample-time.component';
import { SampleComponent } from './sample/sample.component';
import { AuditTimeComponent } from './audit-time/audit-time.component';
import { AuditComponent } from './audit/audit.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { IsEmptyComponent } from './is-empty/is-empty.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { FindComponent } from './find/find.component';
import { FindIndexComponent } from './find-index/find-index.component';
import { EveryComponent } from './every/every.component';
import { MathOperatorsModule } from './math-operators/math-operators.module';
import { HelloComponent } from './hello.component';
import { UtilOperatorsModule } from './util-operators/util-operators.module';
import { ErrorOperatorsModule } from './error-operators/error-operators.module';
import { MulticastOperatorsModule } from './multicast-operators/multicast-operators.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    MathOperatorsModule,
    UtilOperatorsModule,
    ErrorOperatorsModule,
    MulticastOperatorsModule,
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    YoutubeComponent,
    ObserableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ColdToWarmObservableComponent,
    OfComponent,
    FromComponent,
    FromEventComponent,
    FromEventPatternComponent,
    RangeComponent,
    IifComponent,
    InervalComponent,
    TimerComponent,
    DeferComponent,
    ThrowErrorComponent,
    AjaxComponent,
    ConcatComponent,
    MergeComponent,
    ZipComponent,
    PartitionComponent,
    CombineLatestComponent,
    ForkjoinComponent,
    RaceComponent,
    MapComponent,
    ScanComponent,
    PairwiseComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    MergeMapComponent,
    ExhaustMapComponent,
    SwitchAllComponent,
    ConcatAllComponent,
    MergeAllComponent,
    CombineLatestAllComponent,
    StartWithComponent,
    FilterComponent,
    FirstComponent,
    LastComponent,
    SingleComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    DistinctComponent,
    DisitinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    SampleTimeComponent,
    SampleComponent,
    AuditTimeComponent,
    AuditComponent,
    DebounceTimeComponent,
    DebounceComponent,
    IsEmptyComponent,
    DefaultIfEmptyComponent,
    FindComponent,
    FindIndexComponent,
    EveryComponent,
    HelloComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
