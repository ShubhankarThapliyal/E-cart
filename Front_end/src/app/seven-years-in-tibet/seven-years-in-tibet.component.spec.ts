import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenYearsInTibetComponent } from './seven-years-in-tibet.component';

describe('SevenYearsInTibetComponent', () => {
  let component: SevenYearsInTibetComponent;
  let fixture: ComponentFixture<SevenYearsInTibetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenYearsInTibetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenYearsInTibetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
