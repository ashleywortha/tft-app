import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TftBoardComponent } from './tft-board.component';

describe('TftBoardComponent', () => {
  let component: TftBoardComponent;
  let fixture: ComponentFixture<TftBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TftBoardComponent]
    });
    fixture = TestBed.createComponent(TftBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
