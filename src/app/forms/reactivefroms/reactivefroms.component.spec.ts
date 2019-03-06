import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefromsComponent } from './reactivefroms.component';

describe('ReactivefromsComponent', () => {
  let component: ReactivefromsComponent;
  let fixture: ComponentFixture<ReactivefromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivefromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivefromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
