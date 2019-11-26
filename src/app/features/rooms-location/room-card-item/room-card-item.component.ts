import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models';
import { CloudStorageService } from './../../../features/core/cloud-storage.service';

@Component({
  selector: 'app-room-card-item',
  templateUrl: './room-card-item.component.html',
  styleUrls: ['./room-card-item.component.scss']
})
export class RoomCardItemComponent implements OnInit {
  @Input() public room: Room;
  public downloadURL: any;

  constructor(private cloudStorageService: CloudStorageService){}

  public ngOnInit() {
    this.downloadURL = this.cloudStorageService.getStoragedImages();
  }
}
