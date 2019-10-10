import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkullCardComponent } from './skull-card.component';

describe('SkullCardComponent', () => {
  let component: SkullCardComponent;
  let fixture: ComponentFixture<SkullCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkullCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
