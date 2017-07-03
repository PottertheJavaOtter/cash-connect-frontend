import { Component, OnInit } from '@angular/core';
import { TrackersService } from './trackers.service';

@Component({
    templateUrl: 'trackers.component.html'
})
export class TrackersComponent implements OnInit {

    trackers: any[];

    constructor(private trackersService: TrackersService) { }

    ngOnInit(): void {
        this.trackersService
            .getTrackers()
            .subscribe(trackers => this.trackers = trackers);
    }

}
