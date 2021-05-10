import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  
})
export class AppComponent {
  title = 'platform';
  socket: any;

  constructor() {
    //this.socket = io('http://localhost:3000')
  }

  pushUpdate() {
    //this.socket.emit('gagoka', { url: 'pornhub.com' })
  }
}
