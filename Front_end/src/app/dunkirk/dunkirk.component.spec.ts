import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DunkirkComponent } from './dunkirk.component';

describe('DunkirkComponent', () => {
  let component: DunkirkComponent;
  let fixture: ComponentFixture<DunkirkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunkirkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DunkirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
