import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { Room } from '~features/rooms-location/models';
import { CloudStorageService } from '~features/core/cloud-storage.service';

@Component({
  selector: 'app-room-card-item',
  templateUrl: './room-card-item.component.html',
  styleUrls: ['./room-card-item.component.scss']
})
export class RoomCardItemComponent implements OnInit {
  @Input() public room: Room;
  public gorillaAvatar: Observable<any>;

  constructor(private cloudStorageService: CloudStorageService){}

  public ngOnInit() {
    this.gorillaAvatar = this.cloudStorageService.getStoragedImages();
  }
}
