import { TestBed, inject } from '@angular/core/testing';

import { ActiveTrackersWidgetComponent } from './active-trackers-widget.component';

describe('a active-trackers-widget component', () => {
	let component: ActiveTrackersWidgetComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ActiveTrackersWidgetComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ActiveTrackersWidgetComponent], (ActiveTrackersWidgetComponent) => {
		component = ActiveTrackersWidgetComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});