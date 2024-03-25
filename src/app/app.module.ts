

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC826rBmgwTVH6ZHGlifQWdP7lqwaASDTk",
  authDomain: "primeiro-ionic-93478.firebaseapp.com",
  projectId: "primeiro-ionic-93478",
  storageBucket: "primeiro-ionic-93478.appspot.com",
  messagingSenderId: "230301216425",
  appId: "1:230301216425:web:8301f8787f7b0b5de903b8",
  measurementId: "G-1T8Z6LX9XH"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
