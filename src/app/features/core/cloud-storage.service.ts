import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from './firebase.module';

@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {
  private BASE_STORAGE_URL = 'firebase-demo';

  constructor(private afStorage: AngularFireStorage) {}

  public getStoragedImages(): Observable<any[]> {
    return this.afStorage.ref(`/${this.BASE_STORAGE_URL}/gorilla.svg`).getDownloadURL();
  }

}
