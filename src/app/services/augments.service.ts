import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Item } from "../items/item.model";
import { Data } from "../dataModels/data.model";

@Injectable({
    providedIn: 'root'
})

export class AugmentService{
    constructor(private http: HttpClient){}
    augments$ = new BehaviorSubject<Item[]>([]);

    getAllAugments(){
        this.http.get<Data>('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
        .subscribe(data => {
            let augArr:Item[] = data.items;
            augmentIconFixer(augArr);
            tierCreator(augArr);
            augArr = augArr.filter(a => {
                return(
                    a.apiName.includes("TFT9_Augment")
                )
            })
            console.log(augArr)
            this.augments$.next(augArr);
        })

    }
}

function augmentIconFixer(augments: Item[]){
    augments.forEach(augment => {
        augment.icon = augment.icon.slice(0, -3);
        augment.icon = "https://raw.communitydragon.org/latest/game/"+ augment.icon+"png";
        augment.icon = augment.icon.toLowerCase();
    })
}

function tierCreator(augments: Item[]){
    augments.forEach(augment => {
        let check = augment.icon.slice(83);
        if(check.includes('-i')|| check.includes('1')) augment.tier = '1';
        if(check.includes('ii') || check.includes('-t2') || check.includes('2') || augment.name == "Freljord Heart") augment.tier = '2';
        if(check.includes('iii') || check.includes('-t3') || check.includes('3')) augment.tier = '3';
    })

}