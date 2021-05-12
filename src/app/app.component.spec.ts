import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularMK' and subtitle 'MartankaK'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularMK');
    expect(app.subTitle).toEqual('MartankaK');
    expect(app.subTitle2).toEqual('MK');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angularMK app is running!');
  });

  it(`should add two numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.addTwoNumbers(3, 6);
    expect(result).toEqual(9);
  });

  it(`should subtract two numbers and then make a square`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.makeSquare(4, 1, 2);
    expect(result).toEqual(9);
  });

  it(`should return comments`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.getMyClassComments();
    expect(result).toEqual(['foo', 'baz']);
  });

  it(`should multiply two numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.multiplyTwoNumbers(4, 6);
    expect(result).toEqual(24);
  });

  it(`should divide three numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.divideThreeNumbers(12, 3, 2);
    expect(result).toEqual(2);
  });

  it(`should divide three numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.divideThreeNumbers(12, 3, 0);
    expect(result).toEqual(0);
  });

  it(`should return first hobby`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.getMyFirstHobby();
    expect(result).toEqual('TableTennis');
  });
  
  it(`should return first flower`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.getFirstColour();
    expect(result).toEqual('pink');
  });

});
