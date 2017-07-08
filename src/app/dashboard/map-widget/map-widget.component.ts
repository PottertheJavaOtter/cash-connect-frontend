import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-widget',
	templateUrl: 'map-widget.component.html',
	styles: ['agm-map {height: 400px;}']
})

export class MapWidgetComponent implements OnInit {
	title = 'My first AGM project';
	lat = 51.678418;
	lng = 7.809007;
	ngOnInit() { }
}
