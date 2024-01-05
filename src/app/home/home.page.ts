import { Component, OnInit } from '@angular/core';
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
  IonToggle,
  IonItem,
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
    IonToggle,
    IonItem,
  ],
})
export class HomePage implements OnInit {
  myArray: string[] = [];
  isEven: boolean = true;
  filteredArray: string[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.myArray.push(`Item ${i}`);
    }
    this.updateArray();
  }

  toggleEvenOdd() {
    this.isEven = !this.isEven;
    this.updateArray();
  }

  getAriaLabel(): string {
    return this.isEven ? 'Even' : 'Odd';
  }
  updateArray() {
    this.filteredArray = this.myArray.filter((_, i) =>
      this.isEven ? i % 2 === 0 : i % 2 === 1
    );
  }
}
