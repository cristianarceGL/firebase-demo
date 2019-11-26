import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room, RoomResult } from '../models';
import { AngularFireDatabase, AngularFirestore } from '../features/core/firebase.module';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private BASE_URL = 'rooms';

  constructor(private firestore: AngularFirestore) {}

  public getRooms(): Observable<any[]> {
    return this.firestore.collection(this.BASE_URL, ref => ref.orderBy('category', 'desc')).snapshotChanges();
  }

  public getRoomsByFloor(category: string): Observable<any[]> {
    return this.firestore.collection(this.BASE_URL, ref => ref.where('category', '==', category)).snapshotChanges();
  }
}
