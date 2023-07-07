import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "../dataModels/data.model";
import { Trait } from "../traits/trait.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class TraitsService{
    constructor(private http: HttpClient){}
    private traits: string = "allTraits";
    traits$ = new BehaviorSubject<Trait[]>([]);
    
    // setAllTraits(){
    //     this.http.get<Data>('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
    //     .subscribe(data=> {
    //       //getting traits
    //       let traitsArr = data.sets[9].traits;
    //       traitIconFixer(traitsArr);
    //       localStorage.setItem(this.traits, JSON.stringify(traitsArr))

    //     })
  
    // }

    getAllTraitsrxJS(){
      this.http.get<Data>('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
      .subscribe(data => {
        let traitsArr = data.sets[9].traits;
        traitIconFixer(traitsArr);
        this.traits$.next(traitsArr);
      })

    }

    getAllTraits(){
        let traits = JSON.parse(localStorage.getItem(this.traits) || "[]");
        return traits;
    }

}

function traitIconFixer(traits: Trait[]){
    traits.forEach(trait =>{
      trait.icon = trait.icon.slice(0, -3)
      trait.icon = "https://raw.communitydragon.org/latest/game/" + trait.icon + "png";
      trait.icon = trait.icon.toLowerCase();
    })
  }