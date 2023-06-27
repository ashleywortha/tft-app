import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChampPageComponent } from './champ-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SynergiesComponent } from '../synergies/synergies.component';
import { ChampService } from '../services/champ.service';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { DATA } from '../tests/mockJSON';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Champion } from '../champs/champion.model';
import { Data } from '../dataModels/data.model';
import { By } from '@angular/platform-browser';

describe('ChampPageComponent', () => {
  let component: ChampPageComponent;
  let fixture: ComponentFixture<ChampPageComponent>;
  let debugElement: DebugElement;

  let mockChamps ={
    getAllChamps: function(){
      let data = DATA.sets[8].champions;
      this.champIconFixer(data);
      return data;
    },

    getChampByName: function(name:any){
      let champs = DATA.sets[8].champions
      return champs.filter((champ:any) => {return champ.name == name});
    },

    champIconFixer:function(champs: any[]){
      champs.forEach(champ=>{
        champ.icon = champ.icon.slice(0, -3)
        champ.icon = "https://raw.communitydragon.org/latest/game/" + champ.icon + "png";
        champ.icon = champ.icon.toLowerCase();
      })
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampPageComponent, SynergiesComponent ],
      imports: [HttpClientTestingModule, MatCardModule,MatGridListModule, RouterModule],
      providers:[
        {provide: ChampService, useValue: mockChamps}, 
        // {provide: ActivatedRoute, useValue:{params: of({id:123})}},
        {provide: Router, useValue:{url: '/champion/Sylas'}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    // const router = TestBed.inject(Router);
    // const mockUrlTree = router.parseUrl('/champion/Sylas');
    // router.currentUrlTree = mockUrlTree;
      
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate page', () =>{
    component.champ = <any>mockChamps.getChampByName("Sylas")[0];
    expect(component.champ.name).toBe("Sylas");
  })

  it('should go to next champ page on click', () => {
    component.champ = <any>mockChamps.getChampByName("Sylas")[0];
    // let viegoButton = fixture.debugElement.query(By.css('button.viegoButton'))

  })

  // it('should have a url', () => {
  //   const router = TestBed.inject(Router);
  //   const spy = spyOn(router, 'navigateByUrl');
  //   component.champ = <any>mockChamps.getChampByName("Sylas")[0];
    
  //   const url = spy.calls.first().args[0];
  //   expect(url).toBe('/champion/Sylas')
  // })

});
