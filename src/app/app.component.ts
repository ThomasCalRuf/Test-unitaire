import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculatrice';

  add(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }

  mul(a: number, b: number) {
    return a * b;
  }

  div(a: number, b: number) {
    if (b === 0) {
      throw new Error();
    }
    return a / b;
  }
}
