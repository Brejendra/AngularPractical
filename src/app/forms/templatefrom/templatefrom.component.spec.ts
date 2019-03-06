import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefromComponent } from './templatefrom.component';

describe('TemplatefromComponent', () => {
  let component: TemplatefromComponent;
  let fixture: ComponentFixture<TemplatefromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatefromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
