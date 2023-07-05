import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filter } from 'rxjs';
import { Champion } from '../champs/champion.model';
import { Data } from '../dataModels/data.model';
import { ChampService } from '../services/champ.service';
import { TraitsService } from '../services/traits.service';
import { Trait } from '../traits/trait.model';

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss']
})
export class FilterChipsComponent {
  traits: Trait[] = [];
  champs: any;
  filteredChamps: Champion[] = [];
  clicked: String[] = [];

  constructor (private http: HttpClient, private cService: ChampService, private traitService: TraitsService){}
  ngOnInit(){
    this.champs = this.cService.getAllChamps().filter((champ:any) => {return champ.traits.length > 0});
    // this.champs.filter((champ:any) => {
    //   return champ.traits.length > 0;
    // })
    this.filteredChamps = this.champs;
    console.log(this.champs);

    this.traits = this.traitService.getAllTraits();
    console.log(this.traits);
  }

  
  filterByTrait(s: String){
    var num = this.clicked.length;
    this.checkClicked(this.clicked, s);

    console.log(this.clicked);
    if(this.clicked.length < num){
      this.filteredChamps = this.champs;
      if(this.clicked.length < 1){return}
    }

    this.clicked.forEach(trait =>{
      this.filteredChamps = this.filteredChamps.filter((champ) =>{
        return champ.traits.includes(trait);
      })
    })

    console.log(this.filteredChamps);
  }

  checkClicked(arr: String[], s:String){
    if(arr.includes(s)){
      var del = arr.indexOf(s);
      arr.splice(del, 1);
    } else{
      arr.push(s);
    }

  }
}
