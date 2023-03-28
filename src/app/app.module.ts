import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareReplayComponent } from './share-replay/share-replay.component';

@NgModule({
  declarations: [AppComponent, OnecomponentComponent, SecondcomponentComponent, ShareReplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
