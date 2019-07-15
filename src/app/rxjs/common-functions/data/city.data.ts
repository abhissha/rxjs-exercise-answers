import { of } from "rxjs/internal/observable/of";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { City } from "../models/city.model";


@Injectable({
	providedIn: 'root'
})

export class CityData {
	getCities(): Observable<City[]> {
		return of(this.cityList);
	}

	getCitiesByStateId(stateId: number) {
		return of(this.cityList.filter(city => city.stateId === stateId));
	}

	private cityList: City[] =
	[
		{
			"id": 1,
			"name": "San Fransisco",
			"stateId": 1
		},
		{
			"id": 2,
			"name": "San Diego",
			"stateId": 1
		},
		{
			"id": 3,
			"name": "Los Angeles",
			"stateId": 1
		},
		{
			"id": 4,
			"name": "Chicago",
			"stateId": 2
		},
		{
			"id": 5,
			"name": "Oak Brook",
			"stateId": 2
		},
		{
			"id": 6,
			"name": "Saint Charles",
			"stateId": 2
		},
		{
			"id": 7,
			"name": "Indianapolis",
			"stateId": 3
		},
		{
			"id": 8,
			"name": "South Bend",
			"stateId": 3
		},
		{
			"id": 9,
			"name": "Carmel",
			"stateId": 3
		},
	];
}