import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrackersService {

    trackers: any[] = [
        {
            id: '1111',
            location: '123 6th St. Melbourne, FL 32904',
            dateRegistered: '2012/01/01',
            active: true
        },
        {
            id: '2222',
            location: '71 Pilgrim Avenue Chevy Chase, MD 20815',
            dateRegistered: '2012/01/01',
            active: true
        },
        {
            id: '3333',
            location: '70 Bowman St. South Windsor, CT 06074',
            dateRegistered: '2012/01/01',
            active: true
        },
        {
            id: '4444',
            location: '4 Goldfield Rd. Honolulu, HI 96815',
            dateRegistered: '2012/01/01',
            active: false
        },
    ]

    constructor(private http: Http) { }

    getTrackers(): Observable<any> {
        return Observable.of(this.trackers);
    }

}
