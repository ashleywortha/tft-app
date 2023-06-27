import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampService } from '../services/champ.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SynergiesComponent } from './synergies.component';
import { Champion } from '../champs/champion.model';
import { ChampPageComponent } from '../champ-page/champ-page.component';
import { DATA } from '../tests/mockJSON';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

@Component({
  template: `<app-synergies 
  [cName] = "champ.name"
  [cTraits] ="champ.traits"
  (newChampEvent)="updateChamp($event)"
  ></app-synergies>`
})
class TestComponent{
  public champ:Champion = 
  {
    "ability": {
        "desc": "Sylas whirls his chains around him, dealing @PercentHealth*100@% of his maximum Health as magic damage to nearby enemies and healing himself for @ModifiedHealAmount@ Health.",
        "icon": "ASSETS/Characters/Sylas/HUD/Icons2D/SylasQ.dds",
        "name": "Battle Blast",
        "variables": [
            {
                "name": "PercentHealth",
                "value": [
                    0.0,
                    0.10000000149011612,
                    0.11999999731779099,
                    0.15000000596046448,
                    300.0,
                    375.0,
                    450.0
                ]
            },
            {
                "name": "HealAmount",
                "value": [
                    0.5,
                    150.0,
                    170.0,
                    190.0,
                    0.5,
                    0.5,
                    0.5
                ]
            }
        ]
    },
    "apiName": "TFT8_Sylas",
    "cost": 1,
    "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT8_Sylas.TFT_Set8.dds",
    "name": "Sylas",
    "stats": {
        "armor": 45.0,
        "attackSpeed": 0.550000011920929,
        "critChance": 0.25,
        "critMultiplier": 1.399999976158142,
        "damage": 50.0,
        "hp": 700.0,
        "initialMana": 30.0,
        "magicResist": 45.0,
        "mana": 80.0,
        "range": 1.0
    },
    "traits": [
        "Anima Squad",
        "Renegade"
    ]
};
  @ViewChild(SynergiesComponent)
  synergiesComponent: SynergiesComponent | any;
}

let mockChamps ={
  getAllChamps: function(){
    return DATA.sets[8].champions;
  }
}

describe('SynergiesComponent', () => {
  let component: SynergiesComponent;
  let fixture: ComponentFixture<SynergiesComponent>;
  let testFixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let bindingElement:HTMLDivElement;

  let testComponent : TestComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynergiesComponent, TestComponent ],
      imports:[HttpClientTestingModule, RouterModule],
      providers:[
        {provide: ChampService, useValue: mockChamps}, 
        {provide: ActivatedRoute, useValue:{params: of({id:123})}}
      ]
    })
    .compileComponents();

    testFixture = TestBed.createComponent(TestComponent);
    testFixture.detectChanges();

    fixture = TestBed.createComponent(SynergiesComponent);
    fixture.detectChanges();

    component = testFixture.componentInstance.synergiesComponent;
    testComponent = testFixture.componentInstance;
    // debugElement = fixture.debugElement.query(By.directive(ChampPageComponent))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be populated', async() => {
    expect(component.cName).toBe("Sylas");
    expect(component.cTraits).toEqual(["Anima Squad", "Renegade"]);
    expect(component.sChamps.length).toBeGreaterThan(0);
  });

  it('should be correct', async() => {
    expect(component.cName).toBe("Sylas");
    expect(component.cTraits).toEqual(["Anima Squad", "Renegade"]);
    expect(component.sChamps.length).toBeGreaterThan(0);
    expect(component.sChamps.length).toBe(9); 
  })
});
