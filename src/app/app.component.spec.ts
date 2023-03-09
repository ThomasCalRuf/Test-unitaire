import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Ca doit me faire une addition`, () => {
    expect(component.add(2, 3)).toBe(5);
  });

  it('Ca doit me faire une soustraction', () => {
    expect(component.sub(8, 5)).toBe(3);
  });

  it('Ca doit me faire une multiplication', () => {
    expect(component.mul(4, 3)).toBe(12);
  });

  it('Ca doit me faire une division', () => {
    expect(component.div(9, 3)).toBe(3);
  });

  it('Ca doit etre une erreur', () => {
    expect(() => component.div(9, 0)).toThrow();
  });
});
