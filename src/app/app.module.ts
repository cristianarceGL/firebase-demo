import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '~app/app.component';
import { SharedModule } from '~shared/shared.module';
import { FirebaseModule } from '~features/core/firebase.module';
import { RoomStateModule } from '~features/rooms-location/state/room';
import { RoomsLocationModule } from '~features/rooms-location/rooms-location.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FirebaseModule,
    RoomsLocationModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    RoomStateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
