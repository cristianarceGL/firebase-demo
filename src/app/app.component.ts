import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { MatSidenav } from '~shared/material';
import { RoomUIActions, selectAppComponentViewModel } from '~app/features/rooms-location/state/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appComponentViewModel$ = this.store.select(selectAppComponentViewModel);
  public opened = false;
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private store: Store<{}>) {}

  public ngOnInit() {
    this.store.dispatch(RoomUIActions.appComponentInitialized());
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 75;
      this.opened = false;
    } else {
        this.sidenav.fixedTopGap = 75;
    }
  }

  public onLoadAllRequested() {
    this.store.dispatch(RoomUIActions.loadAllRequested());
  }

  public onLoadCategoryRequested(category: string) {
    this.store.dispatch(RoomUIActions.loadCategoryRequested({ category }));
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    if (event.target.innerWidth < 768) {
       this.sidenav.fixedTopGap = 75;
         this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 75;
    }
  }

  public isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768 ? true : false;
  }
}
