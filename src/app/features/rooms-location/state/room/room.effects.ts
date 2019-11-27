import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as RoomUIActions from './ui.actions';
import * as RoomAPIActions from './api.actions';

import { Room } from '~features/rooms-location/models';
import { RoomService } from '~features/rooms-location/rooms-location.service';

export interface FirebaseResponse {
  key: string;
  payload: any;
  prevKey: any;
  type: any;
}

@Injectable()
export class RoomstoreEffects {
  constructor(private roomService: RoomService, private actions$: Actions) {}

  // loadAllRooms
  public loadAllRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RoomUIActions.appComponentInitialized,
        RoomUIActions.loadAllRequested
      ),
      mergeMap(() =>
        this.roomService.getRooms().pipe(
          map((actions: DocumentChangeAction<any>[]) => {
            return actions.map((a: DocumentChangeAction<any>) => {
              const data: Object = a.payload.doc.data() as Room;
              const id = a.payload.doc.id;
              return { id, description: data['description'], category: data['category'] };
            });
          }),
          map(rooms => RoomAPIActions.loadAllSucceeded({ rooms })),
          catchError(error =>
            of(RoomAPIActions.loadAllFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // loadCategory
  public loadCategoryRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomUIActions.loadCategoryRequested),
      mergeMap(action =>
        this.roomService.getRoomsByFloor(action.category).pipe(
          map((actions: DocumentChangeAction<any>[]) => {
            return actions.map((a: DocumentChangeAction<any>) => {
              const data: Object = a.payload.doc.data() as Room;
              const id = a.payload.doc.id;
              return { id, description: data['description'], category: data['category'] };
            });
          }),
          map(rooms => RoomAPIActions.loadCategorySucceeded({ rooms })),
          catchError(error =>
            of(RoomAPIActions.loadCategoryFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // showAlertOnFailure
  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RoomAPIActions.loadAllFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
