import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Champion } from '../champs/champion.model';
import { ChampService } from '../services/champ.service';

@Component({
  selector: 'app-synergies',
  templateUrl: './synergies.component.html',
  styleUrls: ['./synergies.component.scss']
})
export class SynergiesComponent {
  @Input()cTraits: String[] = [];
  @Input()cTrait: String = ""
  @Input() cName: String = "";
  sChamps: Champion[] = [];
  @Output() newChampEvent = new EventEmitter<Champion>();
  allChamps: Champion[] = [];

  constructor(private champService: ChampService){}


  ngOnChanges(){
    this.champService.champs$.subscribe(champ => {
      this.allChamps = champ;
    })
    this.champService.getAllChamps();

    console.log(this.allChamps)

    if(this.cTraits.length <= 0) {
      this.cTraits = [this.cTrait];
    }

    this.sChamps = [];

    this.cTraits.forEach(trait => {
      this.sChamps =  this.sChamps.concat(this.allChamps.filter((champ:any) => {
        if(champ.name !== this.cName){
          return champ.traits.includes(trait);
        }
      }))
    })
  }


  setChampPage(champ: Champion){
    this.champService.setCurrentChamp(champ);
    this.newChampEvent.emit(champ);
  }

}
