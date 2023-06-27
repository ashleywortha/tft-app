import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentsComponent } from './augments.component';

describe('AugmentsComponent', () => {
  let component: AugmentsComponent;
  let fixture: ComponentFixture<AugmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
