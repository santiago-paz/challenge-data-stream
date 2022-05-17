import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../interfaces/News';
import { StreamNews } from '../interfaces/StreamNews';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private $messages = new Subject<Array<News>>()
  messages = this.$messages.asObservable();

  constructor(private pubNub: PubNubAngular) {
    const { uuid, publishKey, subscribeKey, channel } = environment.pubNub;

    pubNub.init({
      uuid,
      publishKey,
      subscribeKey
    });
    pubNub.subscribe({ channels: [channel], triggerEvents: true });
    pubNub.getMessage(channel, (message: StreamNews) => {
      this.$messages.next(message.message);

      if (!environment.production) {
        pubNub.unsubscribeAll();
      }
    })
  }
}