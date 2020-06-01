import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnbComponent } from './bnb.component';

describe('BnbComponent', () => {
  let component: BnbComponent;
  let fixture: ComponentFixture<BnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
