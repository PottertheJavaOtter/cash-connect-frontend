import { TestBed, inject } from '@angular/core/testing';

import { InactiveTrackersWidgetComponent } from './inactive-trackers-widget.component';

describe('a inactive-trackers-widget component', () => {
	let component: InactiveTrackersWidgetComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InactiveTrackersWidgetComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InactiveTrackersWidgetComponent], (InactiveTrackersWidgetComponent) => {
		component = InactiveTrackersWidgetComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});