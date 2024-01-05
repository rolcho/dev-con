import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonList,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonList,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
  ],
})
export class HomePage {
  myArray: string[] = new Array(100).fill('mock text');
  constructor() {}
}
