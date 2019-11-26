import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomCardListComponent } from './room-card-list.component';
import { MaterialModule } from './../../../shared/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomCardItemModule } from '../room-card-item/room-card-item.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoomCardItemModule,
  ],
  declarations: [RoomCardListComponent],
  exports: [RoomCardListComponent],
})
export class RoomCardListModule {}
