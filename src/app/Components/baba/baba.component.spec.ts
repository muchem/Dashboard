import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabaComponent } from './baba.component';

describe('BabaComponent', () => {
  let component: BabaComponent;
  let fixture: ComponentFixture<BabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
