import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybooksComponent } from './playbooks.component';

describe('PlaybooksComponent', () => {
  let component: PlaybooksComponent;
  let fixture: ComponentFixture<PlaybooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaybooksComponent]
    });
    fixture = TestBed.createComponent(PlaybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
