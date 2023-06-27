import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChampsComponent } from './champs.component';
import { FilterChipsComponent } from '../filter-chips/filter-chips.component';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { Champion } from './champion.model';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DATA } from '../tests/mockJSON'
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import {MatCardHarness} from '@angular/material/card/testing';

@Component({
  template: `<app-champs [cChamps]="filteredChamps"></app-champs>`
})
class TestComponent{
  public filteredChamps: any[] = DATA.sets[8].champions;

  @ViewChild(ChampsComponent)
  champsComponent: ChampsComponent | any;
}

describe('ChampsComponent', () => {
  let component: ChampsComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let loader: HarnessLoader;
  
  let testComponent: TestComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampsComponent, TestComponent ],
      imports:[HttpClientTestingModule, MatCardModule, RouterModule],
      providers:[
        {provide: ActivatedRoute, useValue:{params: of({id:123})}},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.champsComponent;
    testComponent = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(ChampsComponent))
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be populated', async () =>{
    expect(component.cChamps.length).toBeGreaterThan(0);
  });

  it('should update when filteredChamps updates', () => {
    expect(component.cChamps.length).toBe(67);
    let currentChamps = fixture.componentInstance.filteredChamps;
    testComponent.filteredChamps = currentChamps.filter(c => c.traits.includes("Mascot"));
    fixture.detectChanges();
    expect(component.cChamps.length).toBe(6);
  })

});
