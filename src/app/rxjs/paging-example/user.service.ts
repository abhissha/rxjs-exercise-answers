import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { User } from "./user.model";
import { map, tap, reduce, pluck, shareReplay, switchMap, distinctUntilChanged, scan } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
  })
export class UserService {
    private baseUrl: string = "https://randomuser.me/api/?seed=foobar";

    limits:number[] = [10, 50, 100];
    limitsBS: BehaviorSubject<number> = new BehaviorSubject(this.limits[0]);
    limits$ = this.limitsBS.pipe(
        distinctUntilChanged()
    );

    pageBS: BehaviorSubject<number> = new BehaviorSubject(1);
    //page$ = this.pageBS.asObservable();
    page$ = this.pageBS
            .pipe(
              scan((acc,cur) => (cur < 1 ? acc: cur), 1)
            );
    
    isFirstPage$ = this.page$.pipe(map(pageNum => pageNum == 1));


    user$ = combineLatest([this.limits$, this.page$])
    .pipe(
        switchMap(([limit, pageNumber]) => this.getUsers(limit, pageNumber))
    )

    constructor(public http: HttpClient) {

    }

    private getUsers(numberOfResult: number, pageNumber: number): Observable<User[]> {
        return this.http.get(`${this.baseUrl}&results=${numberOfResult}&page=${pageNumber}`)
                .pipe(
                    map((x:any) => x.results),
                    map((array: any) => {
                        return array.map((item:any) => {
                            let newUser = new User();
                            newUser.title = item.name.title;
                            newUser.first = item.name.first;
                            newUser.last = item.name.last;
                            newUser.pictureUrl = item.picture.thumbnail;
                            return newUser;
                        })
                    }),
                    map((x: User[]) => x),
                    shareReplay()
                );
    }

    public setPage(num: number): void {
        let currentPageNumber = this.pageBS.getValue();
        let newPageNumber = num + currentPageNumber;
        // if(newPageNumber < 1) {
        //     newPageNumber = 1;
        // }
        this.pageBS.next(newPageNumber);
    }
}