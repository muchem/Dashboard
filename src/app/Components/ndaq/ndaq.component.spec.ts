import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaqComponent } from './ndaq.component';

describe('NdaqComponent', () => {
  let component: NdaqComponent;
  let fixture: ComponentFixture<NdaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
