import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavortiesComponent } from './favorties.component';

describe('FavortiesComponent', () => {
  let component: FavortiesComponent;
  let fixture: ComponentFixture<FavortiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavortiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
