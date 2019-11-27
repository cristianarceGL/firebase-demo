import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '~shared/material';
import { RoomCardItemComponent } from './room-card-item.component';

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
