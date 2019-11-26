import { createAction, props } from '@ngrx/store';
import { Room } from './../../models';

export const loadAllSucceeded = createAction(
  '[Rooms API] Load All Succeeded',
  props<{ rooms: Room[] }>()
);

export const loadAllFailed = createAction(
  '[Rooms API] Load All Failed',
  props<{ error: string }>()
);

export const loadCategorySucceeded = createAction(
  '[Rooms API] Load Category Succeeded',
  props<{ rooms: Room[] }>()
);

export const loadCategoryFailed = createAction(
  '[Rooms API] Load Category Failed',
  props<{ error: string }>()
);
