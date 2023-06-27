import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilterChipsComponent } from './filter-chips.component';
import { ChampsComponent } from '../champs/champs.component';
import { DebugElement } from '@angular/core';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatChipOptionHarness} from '@angular/material/chips/testing';
import { ChampService } from '../services/champ.service';
import { TraitsService } from '../services/traits.service';
import { DATA } from '../tests/mockJSON'
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('FilterChipsComponent', () => {
  let component: FilterChipsComponent;
  let fixture: ComponentFixture<FilterChipsComponent>;
  let loader: HarnessLoader;

  let debugElement: DebugElement;

  let mockTraits ={
    getAllTraits: function(){
      return DATA.sets[8].traits;
    }
  }

  let mockChamps ={
    getAllChamps: function(){
      return DATA.sets[8].champions;
    }
  }
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterChipsComponent, ChampsComponent ],
      imports:[HttpClientTestingModule, MatChipsModule, MatCardModule, RouterModule],
      providers:[
        {provide: ChampService, useValue: mockChamps}, 
        {provide: TraitsService, useValue:mockTraits},
        {provide: ActivatedRoute, useValue:{params: of({id:123})}}
      ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(FilterChipsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
    
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be populated', () =>{
    expect(component.traits.length).toBeGreaterThan(0);
    expect(component.champs.length).toBeGreaterThan(0);
    expect(component.filteredChamps.length).toBeGreaterThan(0);
  })

  it('should work', async () => {
    const chips = await loader.getAllHarnesses(MatChipOptionHarness);
    const firstChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}))

  })

  it('should filter based on one trait', async() => {
    expect(component.clicked.length).toEqual(0);
    const civilianChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}));
    expect(await civilianChip.isSelected()).toBeFalse();

    await civilianChip.select();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Civilian");
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(3);
    
  })

  it('should filter based on multiple traits', async() => {
    expect(component.clicked.length).toBe(0);
    const civilianChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}));
    expect(await civilianChip.isSelected()).toBeFalse();
    const mascotChip = await loader.getHarness(MatChipOptionHarness.with({text:'Mascot'}));
    expect(await mascotChip.isSelected()).toBeFalse();

    await civilianChip.select();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Civilian");
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(3);

    await mascotChip.select();
    expect(component.clicked.length).toBe(2);
    expect(component.clicked[1]).toBe("Mascot");
    expect(await mascotChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(1);
    expect(component.filteredChamps[0].name).toBe("Galio");
    
  })

  it('should re-filter when chip is unclicked', async() => {
    expect(component.clicked.length).toBe(0);
    const civilianChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}));
    expect(await civilianChip.isSelected()).toBeFalse();
    const mascotChip = await loader.getHarness(MatChipOptionHarness.with({text:'Mascot'}));
    expect(await mascotChip.isSelected()).toBeFalse();

    await civilianChip.select();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Civilian");
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(3);

    await mascotChip.select();
    expect(component.clicked.length).toBe(2);
    expect(component.clicked[1]).toBe("Mascot");
    expect(await mascotChip.isSelected()).toBeTrue();
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(1);

    await civilianChip.deselect();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Mascot");
    expect(await civilianChip.isSelected()).toBeFalse();
    expect(await mascotChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(6);
  })

  it('should show all champs when all chips are unselected', async() => {
    expect(component.clicked.length).toBe(0);
    const civilianChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}));
    expect(await civilianChip.isSelected()).toBeFalse();
    const mascotChip = await loader.getHarness(MatChipOptionHarness.with({text:'Mascot'}));
    expect(await mascotChip.isSelected()).toBeFalse();

    await civilianChip.select();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Civilian");
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(3);

    await mascotChip.select();
    expect(component.clicked.length).toBe(2);
    expect(component.clicked[1]).toBe("Mascot");
    expect(await mascotChip.isSelected()).toBeTrue();
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(1);

    await civilianChip.deselect();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Mascot");
    expect(await civilianChip.isSelected()).toBeFalse();
    expect(await mascotChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(6);

    await mascotChip.deselect();
    expect(component.clicked.length).toBe(0);
    expect(await mascotChip.isSelected()).toBeFalse();

    expect(component.filteredChamps.length).toBe(67);
  })


  it('should show no champs if none match criteria', async() => {
    expect(component.clicked.length).toBe(0);
    const civilianChip = await loader.getHarness(MatChipOptionHarness.with({text: 'Civilian'}));
    expect(await civilianChip.isSelected()).toBeFalse();
    const mascotChip = await loader.getHarness(MatChipOptionHarness.with({text:'Mascot'}));
    expect(await mascotChip.isSelected()).toBeFalse();

    await civilianChip.select();
    expect(component.clicked.length).toBe(1);
    expect(component.clicked[0]).toBe("Civilian");
    expect(await civilianChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(3);

    await mascotChip.select();
    expect(component.clicked.length).toBe(2);
    expect(component.clicked[1]).toBe("Mascot");
    expect(await mascotChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(1);

    const starChip = await loader.getHarness(MatChipOptionHarness.with({text:'Star Guardian'}));
    expect(await starChip.isSelected()).toBeFalse();

    await starChip.select();
    expect(component.clicked.length).toBe(3);
    expect(component.clicked[2]).toBe("Star Guardian");
    expect(await starChip.isSelected()).toBeTrue();

    expect(component.filteredChamps.length).toBe(0);
    
  })


});
