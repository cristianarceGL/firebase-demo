import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoomCardItemModule } from './room-card-item/room-card-item.module';
import { RoomCardListModule } from './room-card-list/room-card-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoomCardItemModule,
    RoomCardListModule
  ],
  exports: [
    RoomCardItemModule,
    RoomCardListModule
  ]
})
export class RoomsLocationModule {}
