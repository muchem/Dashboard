import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtcComponent } from './ltc.component';

describe('LtcComponent', () => {
  let component: LtcComponent;
  let fixture: ComponentFixture<LtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
