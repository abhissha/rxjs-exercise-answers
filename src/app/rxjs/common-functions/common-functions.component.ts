import { Component } from '@angular/core';
import { CommonFunctionService } from "./common-function.service";

@Component({
	selector: 'app-common-functions',
	templateUrl: './common-functions.component.html',
	styleUrls: ['./common-functions.component.css']
})
export class CommonFunctionsComponent {
	// Problem 1
	specialItems$ = this.commonFunctionService.getMenuItemsOnSpecial();

	// Problem 2
	menuItem$ = this.commonFunctionService.getActiveMenuItemByUrlId();

	// Problem 3
	states$ = this.commonFunctionService.getStates();
	cities$ = this.commonFunctionService.getCitiesByStateSelection();

	constructor(private commonFunctionService: CommonFunctionService) { }

	onStateSelected(stateId: number) {
		this.commonFunctionService.setSelectedState(stateId);
	}

}
