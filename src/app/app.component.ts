import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoomUIActions, selectAppComponentViewModel } from './state/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  public ngOnInit() {
    this.store.dispatch(RoomUIActions.appComponentInitialized());
  }

  public onLoadAllRequested() {
    this.store.dispatch(RoomUIActions.loadAllRequested());
  }

  public onLoadCategoryRequested(category: string) {
    this.store.dispatch(RoomUIActions.loadCategoryRequested({ category }));
  }
}
