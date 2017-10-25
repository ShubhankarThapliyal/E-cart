import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDarkKnightComponent } from './the-dark-knight.component';

describe('TheDarkKnightComponent', () => {
  let component: TheDarkKnightComponent;
  let fixture: ComponentFixture<TheDarkKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDarkKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDarkKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
