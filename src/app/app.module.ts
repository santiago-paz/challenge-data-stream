import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    PubNubAngular
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
