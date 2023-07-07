import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Champion } from "../champs/champion.model";
import { Data } from "../dataModels/data.model";

@Injectable({
    providedIn: 'root'
})

export class ChampService{
    private champs: string = "allChamps";
    private currentChamp: string = "champ"
    champs$ = new BehaviorSubject<Champion[]>([])
    constructor(private http: HttpClient){}
    

    getAllChamps(){
      this.http.get<Data>('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
      .subscribe(res => {
        let champArr = res.sets[9].champions;
        champIconFixer(champArr);
        champAbilityIconFixer(champArr);
        champArr = champArr.filter((champ:Champion) => {return champ.traits.length > 0})
        this.champs$.next(champArr);
      })
    }

   

    getCurrentChamp(){
        let champ = localStorage.getItem(this.currentChamp);
        if(champ != null){
            return JSON.parse(champ);
        }
    }

    setCurrentChamp(champ:any){
        localStorage.setItem(this.currentChamp, JSON.stringify(champ));
    }

    getChampByName(name: any){
      console.log(name);
      if(name.includes("%20")){
        name = name.replace(/%20/g, " ");
      }
        let champs = JSON.parse(localStorage.getItem(this.champs) || "[]");
  
        return champs.filter((champ:any) => {return champ.name == name});
    }
}

//helper formatting functions
  
  
  function champIconFixer(champs: Champion[]){
    champs.forEach(champ=>{
      if(champ.icon == null){
        champ.icon = "https://raw.communitydragon.org/latest/game/assets/characters/pettftavatar/hud/icon_tft_avatar_blue.png"
      } else {
        champ.icon = champ.icon.slice(0, -3)
        champ.icon = "https://raw.communitydragon.org/latest/game/" + champ.icon + "png";
        champ.icon = champ.icon.toLowerCase();
      }
      
    })
  }

  function champAbilityIconFixer(champs:Champion[]){
    champs.forEach(champ => {
      champ.ability.icon = champ.ability.icon.slice(0,-3)
      champ.ability.icon = "https://raw.communitydragon.org/latest/game/" + champ.ability.icon + "png";
      champ.ability.icon = champ.ability.icon.toLowerCase();
    })
  }