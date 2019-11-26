import { Component, Input } from '@angular/core';
import { Room } from '../../models';

@Component({
  selector: 'app-room-card-item',
  templateUrl: './room-card-item.component.html',
  styleUrls: ['./room-card-item.component.scss']
})
export class RoomCardItemComponent {
  @Input() room: Room;
}
