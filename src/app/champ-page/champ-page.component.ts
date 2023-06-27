import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../champs/champion.model';
import { ChampService } from '../services/champ.service';

@Component({
  selector: 'app-champ-page',
  templateUrl: './champ-page.component.html',
  styleUrls: ['./champ-page.component.scss']
})
export class ChampPageComponent {
  champ: Champion = {
    ability: {
      desc:'', 
      name:'', 
      icon:'',
      variables:[]
    },
    apiName:'',
    cost:0,
    name: '',
    stats:{armor:0, attackSpeed:0, critChance: 0, critMultiplier: 0, damage:0, hp:0, initialMana: 0, mana:0, range:0, magicResist: 0},
    traits:['', ''],
    icon:''

  }

  constructor(private champService: ChampService, private router: Router){}
  ngOnInit(){
    let name = this.router.url.split('/').pop();
    this.champ = this.champService.getChampByName(name)[0];

  }

  updateChamp(champ: Champion){
    this.champ = champ;
  }

}
