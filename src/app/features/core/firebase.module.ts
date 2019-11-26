import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreModule,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


export { AngularFirestore };
export { AngularFireDatabase };
export { DocumentChangeAction };
export { AngularFirestoreDocument };
export { AngularFireStorage };


const modules = [AngularFirestoreModule, AngularFireDatabaseModule,
  AngularFirestoreModule, AngularFireAuthModule, AngularFireStorageModule];

@NgModule({
  imports: [...modules, AngularFireModule.initializeApp(environment.firebase)],
  exports: [...modules, AngularFireModule],
  providers: [AngularFireAuthGuard],
})
export class FirebaseModule {}
