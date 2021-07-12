import { Component } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;

  lastUpdate = new Observable(subscriber => {
    const date = new Date();
    setTimeout(() => {
      subscriber.complete();
    }, 2000
    )
  });
 /*  lastUpdate () {
    const date = new Date();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(date);
      }, 2000
      );
    });
  } */

  appareils = [
    {
      name : 'Machine a laver',
      status : 'Off'
    },
    {
      name : 'Ordinateur',
      status : 'On'
    },
    {
      name : 'Frigo',
      status : 'Off'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout');
  }
}
