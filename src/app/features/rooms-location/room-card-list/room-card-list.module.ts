import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '~shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomCardListComponent } from './room-card-list.component';
import { RoomCardItemModule } from '~features/rooms-location/room-card-item/room-card-item.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RoomCardItemModule,
  ],
  declarations: [RoomCardListComponent],
  exports: [RoomCardListComponent],
})
export class RoomCardListModule {}
