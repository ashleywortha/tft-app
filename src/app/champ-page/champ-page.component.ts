import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../champs/champion.model';
import { ChampService } from '../services/champ.service';
import { Location } from '@angular/common';

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

  constructor(private champService: ChampService, private router: Router, private route:ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap.subscribe(
      (routeParam) => {
        const name = routeParam.get('name');
        this.champ = this.champService.getChampByName(name)[0]
        console.log(this.champ)
      },
      (err) => {}
    )

  }

  updateChamp(champ: Champion){
    this.champ = champ;
  }

}
