import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoom from './room.reducer';

// Lookup the 'Room' feature state managed by NgRx
const getRoomState = createFeatureSelector<fromRoom.State>(
  fromRoom.roomFeatureKey
);

export const selectRoomList = createSelector(
  getRoomState,
  state => state.rooms
);

export const selectRoomError = createSelector(
  getRoomState,
  state => state.error
);

export const selectRoomIsLoading = createSelector(
  getRoomState,
  state => state.isLoading
);

export const selectAppComponentViewModel = createSelector(
  selectRoomList,
  selectRoomError,
  selectRoomIsLoading,
  (rooms, error, loading) => ({
    rooms,
    error,
    loading
  })
);
