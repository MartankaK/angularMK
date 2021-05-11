import { Component } from '@angular/core';

let title = 'angularMK'
let arr: number[] = [1,2,3,4];
let comments: string[] = ['foo', 'baz'];

let myObject = {
  title: 'angularMK',
  myArray: [5,4,3,2,1],
  myNull: null,
} 

class MyClass {
  title: string = 'mojaKlasa'
  getComments(): string[] {
    return comments
  }
}

let myClassInstance = new MyClass()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMK';
  subTitle = 'MartankaK';
  subTitle2 = 'MK';
  getMyClassComments() {
    return myClassInstance.getComments()
  }
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }
  makeSquare(a: number, b: number, c: number): number {
    return (a - b) ** c;
  }
  multiplyTwoNumbers(a: number, b:number): number {
    return a * b;
  }
  divideThreeNumbers(a: number, b:number, c:number): number {
    if (b === 0 || c === 0) {
      return 0
    }
    return a/b/c;
  }
}
