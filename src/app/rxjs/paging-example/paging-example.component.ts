import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-paging-example',
  templateUrl: './paging-example.component.html',
  styleUrls: ['./paging-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingExampleComponent {

  user$ = this.userService.user$;
  limit$ = this.userService.limits$;
  limits = this.userService.limits;
  page$ = this.userService.page$;
  isFirstPage$ = this.userService.isFirstPage$;

  constructor(public userService: UserService) { }

  setLimit(limit: number): void {
    this.userService.limitsBS.next(limit);
  }

  shiftPage(num: number): void {
    this.userService.setPage(num);
  }
}
