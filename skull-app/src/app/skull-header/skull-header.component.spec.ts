import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkullHeaderComponent } from './skull-header.component';

describe('SkullHeaderComponent', () => {
  let component: SkullHeaderComponent;
  let fixture: ComponentFixture<SkullHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkullHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkullHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
