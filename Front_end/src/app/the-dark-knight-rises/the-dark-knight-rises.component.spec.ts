import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDarkKnightRisesComponent } from './the-dark-knight-rises.component';

describe('TheDarkKnightRisesComponent', () => {
  let component: TheDarkKnightRisesComponent;
  let fixture: ComponentFixture<TheDarkKnightRisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDarkKnightRisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDarkKnightRisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
