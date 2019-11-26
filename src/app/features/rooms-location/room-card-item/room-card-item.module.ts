import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomCardItemComponent } from './room-card-item.component';
import { MaterialModule } from './../../../shared/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [RoomCardItemComponent],
  exports: [RoomCardItemComponent],
})
export class RoomCardItemModule {}
