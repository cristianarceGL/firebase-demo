import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Room } from '~features/rooms-location/models';

@Component({
  selector: 'app-room-card-list',
  templateUrl: './room-card-list.component.html',
  styleUrls: ['./room-card-list.component.scss']
})
export class RoomCardListComponent {
  @Input() rooms: Room[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() loadAllRequested = new EventEmitter();
  @Output() loadCategoryRequested = new EventEmitter<string>();

}
