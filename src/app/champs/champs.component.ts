import { Component, Input, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Data } from '../dataModels/data.model';
import { Champion } from './champion.model';
import { ChampService } from '../services/champ.service';
import { FilterChipsComponent } from '../filter-chips/filter-chips.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-champs',
  templateUrl: './champs.component.html',
  styleUrls: ['./champs.component.scss']
})
export class ChampsComponent {
  @Input()cChamps: Champion[] = [];

  constructor (private http: HttpClient, private cService: ChampService){}


   getColor(cost:number){
    // console.log(cost)
    switch(cost){
      case 1:
        return 'silver';
      case 2:
        return 'green';
      case 3: 
        return 'blue';
      case 4: 
        return 'magenta';
      case 5:
          return 'gold';
      default:
        return 'red';
        
    }
  }

  setChampPage(champ: Champion){
    this.cService.setCurrentChamp(champ);
  }

}

