import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TrackersComponent } from './trackers.component';
import { TrackersRoutingModule } from './trackers-routing.module';

import { TrackersService } from './trackers.service';

@NgModule({
  imports: [
    TrackersRoutingModule,
    ChartsModule, HttpModule, CommonModule
  ],
  providers: [ TrackersService ],
  declarations: [ TrackersComponent ]
})
export class TrackersModule { }
