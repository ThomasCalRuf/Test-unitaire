/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Hippopotamus } from './Hippopotamus';

import { HippopotamusComponent } from './Hippopotamus.component';

describe('HippopotamusComponent', () => {
  let component: HippopotamusComponent;
  let fixture: ComponentFixture<HippopotamusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HippopotamusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HippopotamusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Hippotame doit avoir pris du poids', () => {
    const hippo = new Hippopotamus('Thomas', 300000, 41);
    hippo.eat();
    expect(hippo.weight).toEqual(301000);
  });

  it('Hippotame doit avoir perdu du poids', () => {
    const hippo = new Hippopotamus('Thomas', 300000, 41);
    hippo.swim();
    expect(hippo.weight).toEqual(299700);
  });

  it('Hippotame1 perdre contre Hippotame2', () => {
    const hippo1 = new Hippopotamus('Thomas', 300, 40);
    const hippo2 = new Hippopotamus('Leo', 300, 41);
    expect(hippo1.fight(hippo2)).toBe(hippo2);
  });

  it('Hippotame2 perdre contre Hippotame1', () => {
    const hippo1 = new Hippopotamus('Thomas', 300, 42);
    const hippo2 = new Hippopotamus('Leo', 300, 41);
    expect(hippo1.fight(hippo2)).toBe(hippo1);
  });

  it('Renvoie une chaine de caractere', () => {
    const hippo1 = new Hippopotamus('Thomas', 300000, 41);
    expect(hippo1.toString()).toBe(
      "L'Hippopotame se nomme Thomas, il pèse 300000g, il a des défenses de 41cm"
    );
  });
});
