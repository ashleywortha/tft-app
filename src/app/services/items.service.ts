import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "../dataModels/data.model";
import { Item } from "../items/item.model";

@Injectable({providedIn: 'root'})
export class ItemsService{
    constructor(private http:HttpClient){}
    private items: string="allItems";

    setAllItems(){
        this.http.get<Data>('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
        .subscribe(data=> {
            let itemsArr = data.items
            itemIconFixer(itemsArr);
            localStorage.setItem(this.items, JSON.stringify(itemsArr))
        })
    }

    getAllItems(){
        let items = JSON.parse(localStorage.getItem(this.items) || "[]");
        items = items.filter((i:any) => {
            return (i.apiName.includes("TFT_Item")
            || i.apiName.includes("TFT9_Item"))
            && !i.apiName.includes("_Grant") 
            && !(i.name === null)
            && !i.name.includes("_")
        })
        return items;
    }
}

function itemIconFixer(items: Item[]){
    items.forEach(item => {
        item.icon = item.icon.slice(0, -3)
        item.icon = "https://raw.communitydragon.org/latest/game/"+ item.icon+"png";
        item.icon = item.icon.toLowerCase();
    })
}