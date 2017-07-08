import { TestBed, inject } from '@angular/core/testing';

import { MapWidgetComponent } from './map-widget.component';

describe('a map-widget component', () => {
	let component: MapWidgetComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MapWidgetComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MapWidgetComponent], (MapWidgetComponent) => {
		component = MapWidgetComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});