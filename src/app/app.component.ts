import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMK';
  subTitle = 'MartankaK';
  subTitle2 = 'MK';
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }
  makeSquare(a:number, b:number, c:number): number {
    return (a - b) ** c;
  }
}
