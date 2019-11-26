import { Action, createReducer, on } from '@ngrx/store';
import { Room } from '../../models';
import * as RoomAPIActions from './api.actions';
import * as RoomUIActions from './ui.actions';

export interface State {
  rooms: Room[];
  isLoading: boolean;
  error: string;
}

export const roomFeatureKey = 'room';

export const initialState: State = {
  rooms: [],
  isLoading: false,
  error: ''
};

const roomReducer = createReducer(
  initialState,
  on(
    RoomUIActions.appComponentInitialized,
    RoomUIActions.loadAllRequested,
    state => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    RoomAPIActions.loadAllSucceeded,
    RoomAPIActions.loadCategorySucceeded,
    (state, { rooms }) => ({
      ...state,
      rooms,
      isLoading: false
    })
  ),
  on(
    RoomAPIActions.loadAllFailed,
    RoomAPIActions.loadCategoryFailed,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return roomReducer(state, action);
}
