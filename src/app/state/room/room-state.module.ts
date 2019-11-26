import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RoomstoreEffects } from './room.effects';
import * as fromRoom from './room.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRoom.roomFeatureKey, fromRoom.reducer),
    EffectsModule.forFeature([RoomstoreEffects])
  ],
  declarations: []
})
export class RoomStateModule {}
