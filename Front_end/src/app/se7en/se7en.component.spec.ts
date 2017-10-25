import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Se7enComponent } from './se7en.component';

describe('Se7enComponent', () => {
  let component: Se7enComponent;
  let fixture: ComponentFixture<Se7enComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Se7enComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Se7enComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
