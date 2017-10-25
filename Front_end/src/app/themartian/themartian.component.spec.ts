import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemartianComponent } from './themartian.component';

describe('ThemartianComponent', () => {
  let component: ThemartianComponent;
  let fixture: ComponentFixture<ThemartianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemartianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemartianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
