import { Component, OnInit } from '@angular/core';
import { Hippopotamus } from './Hippopotamus';

@Component({
  selector: 'app-Hippopotamus',
  templateUrl: './Hippopotamus.component.html',
  styleUrls: ['./Hippopotamus.component.css'],
})
export class HippopotamusComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const hippo1 = new Hippopotamus('Hippo faible', 25, 30);
    const hippo2 = new Hippopotamus('Hippo fort', 50, 40);

    hippo1.fight(hippo2);
  }
}
