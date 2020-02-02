

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Supply/Demand Tracker';

	// Add few interests for initial listing
	interestsList = [
	{	
		id : 1,
		producer_name : "Sangwin",
		googlemaps_api : "Gawande",
		email : "sangwin@yopmail.com",
		phone : 9503733178,
	},
	{
		id : 2,
		producer_name : "Oman",
		googlemaps_api : "Umir",
		email : "oman@yopmail.com",
		phone : 8574889658,
	},
	{
		id : 3,
		producer_name : "Tina",
		googlemaps_api : "Dillon",
		email : "tina@yopmail.com",
		phone : 7485889658,
	},
	{
		id : 4,
		producer_name : "John",
		googlemaps_api : "Doe",
		email : "john@yopmail.com",
		phone : 9685589748,
	},
	{
		id : 5,
		producer_name : "Peter",
		googlemaps_api : "Parker",
		email : "peter@yopmail.com",
		phone : 8595856547,
	}
	];

	constructor() {
		// Save interests to localStorage
		localStorage.setItem('interests', JSON.stringify(this.interestsList));
	}
}


