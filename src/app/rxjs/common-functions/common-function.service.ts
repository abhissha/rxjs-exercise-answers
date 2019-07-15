import { Injectable } from "@angular/core";
import { ParamMap, ActivatedRoute } from "@angular/router";
import { concatMap, map, switchMap } from "rxjs/operators";
import { MenuItemData } from "./data/menu-item.data";
import { Observable, BehaviorSubject } from "rxjs";
import { MenuItem } from "./models/menu-item.model";
import { StateData } from "./data/states.data";
import { CityData } from "./data/city.data";
import { State } from "./models/state.model";
import { City } from "./models/city.model";


@Injectable({
	providedIn: 'root'
})
export class CommonFunctionService {
	private queryParamMap = this.route.queryParamMap;
	
	constructor(
		private route: ActivatedRoute,
		private menuItemData: MenuItemData,
		private stateData: StateData,
		private cityData: CityData) { }

	// Problem 1
	public getMenuItemsOnSpecial(): Observable<MenuItem[]> {
		return this.menuItemData
			.getFoodList()
			.pipe(
				map((menuItems: MenuItem[]) => menuItems.filter((menuItem: MenuItem) => menuItem.isSpecial === true))
			)
	}
	
	// Problem 2
	public getActiveMenuItemByUrlId(): Observable<MenuItem> {
		return this.queryParamMap
			.pipe(
				concatMap((value: ParamMap) => {
					return this.menuItemData
						.getMenuItemById(+value.get("id"))
				})
			)
	}

	// Problem 3
	private selectedState$ = new BehaviorSubject<number>(null);
	
	public setSelectedState(stateId: number) {
		this.selectedState$.next(stateId);
	}

	public getStates(): Observable<State[]> {
		return this.stateData
			.getStates();
	}

	public getCitiesByStateSelection(): Observable<City[]> {
		// Notice the trigger observable is on the outside
		return this.selectedState$
			.pipe(
				switchMap(stateId => 
					this.cityData.getCitiesByStateId(stateId)
				)
			)
	}
}