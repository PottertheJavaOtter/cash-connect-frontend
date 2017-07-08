import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ActiveTrackersWidgetComponent } from './active-trackers-widget/active-trackers-widget.component';
import { InactiveTrackersWidgetComponent } from './inactive-trackers-widget/inactive-trackers-widget.component';

import { MapWidgetComponent } from './map-widget/map-widget.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpZgVWzTO2USEwjzEEcvExGCFkTWSGrQA'
    })
  ],
  declarations: [ DashboardComponent, ActiveTrackersWidgetComponent, InactiveTrackersWidgetComponent, MapWidgetComponent]
})
export class DashboardModule { }
