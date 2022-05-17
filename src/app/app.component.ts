import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { News } from './interfaces/News';
import { StreamNews } from './interfaces/StreamNews';
import { StreamService } from './services/stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public allNews: Observable<Array<News>>;
  public spinner: boolean = true;
  private subscription: Subscription;

  constructor(private streamService: StreamService) {
    this.allNews = streamService.messages;
    this.subscription = this.allNews.subscribe(() => {
      this.spinner = false;
      this.subscription.unsubscribe()
    })
  }
}
