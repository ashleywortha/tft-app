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
  allChamps = this.champService.getAllChamps();

  constructor(private champService: ChampService){}

  ngOnChanges(){
    if(this.cTraits.length <= 0) {
      // this.sChamps = [];
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
    // console.log(this.champService.getCurrentChamp())
    this.newChampEvent.emit(champ);
  }

}
