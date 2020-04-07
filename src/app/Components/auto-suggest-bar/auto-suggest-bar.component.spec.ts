import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSuggestBarComponent } from './auto-suggest-bar.component';

describe('AutoSuggestBarComponent', () => {
  let component: AutoSuggestBarComponent;
  let fixture: ComponentFixture<AutoSuggestBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSuggestBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSuggestBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
