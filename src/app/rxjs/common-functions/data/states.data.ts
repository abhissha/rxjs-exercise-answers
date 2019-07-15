import { of } from "rxjs/internal/observable/of";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { State } from "../models/state.model";

@Injectable({
	providedIn: 'root'
})

export class StateData {
	getStates(): Observable<State[]> {
		return of(this.foodList);
	}

	private foodList: State[] =
	[
		{
			"id": 1,
			"name": "California"
		},
		{
			"id": 2,
			"name": "Illinios",
		},
		{
			"id": 3,
			"name": "Indiana"
		}
	];
}