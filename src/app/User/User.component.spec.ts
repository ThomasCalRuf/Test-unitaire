/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { User } from './User';

import { UserComponent } from './User.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Le User est valide`, () => {
    const user = new User(
      'thomas.calvete@hotmail.com',
      'Calvete Ruffier',
      'Thomas',
      23
    );

    expect(user.isValid()).toBeTrue();
  });

  it("L'email n'est pas bon", () => {
    const user = new User('nimp', 'Calvete Ruffier', 'Thomas', 23);
    expect(user.isValid()).toBeFalse();
  });

  it("L'email est vide", () => {
    const user = new User('', 'Calvete Ruffier', 'Thomas', 23);
    expect(user.isValid()).toBeFalse();
  });

  it("Le nom n'est pas bon", () => {
    const user = new User('thomas.calvete@hotmail.com', '', 'Thomas', 23);
    expect(user.isValid()).toBeFalse();
  });

  it("Le prénom n'est pas bon", () => {
    const user = new User(
      'thomas.calvete@hotmail.com',
      'Calvete Ruffier',
      '',
      23
    );
    expect(user.isValid()).toBeFalse();
  });

  it("L'age est en dessous", () => {
    const user = new User(
      'thomas.calvete@hotmail.com',
      'Calvete Ruffier',
      'Thomas',
      12
    );
    expect(user.isValid()).toBeFalse();
  });
});
