import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Data } from '../dataModels/data.model';
import { ItemsService } from '../services/items.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: Item[] = [];
  filteredItems: Item[] = [];
  combinedColumns: string[] =['item', 'name', 'desc', 'recipe']

  constructor (private itemsService: ItemsService){}
  ngOnInit(){
    this.itemsService.items$.subscribe(item => {
      this.items = item;
      this.filteredItems = item;
    })
    this.itemsService.getAllItems();
    console.log(this.items)
  }


  filterItems(chip:string): void{
    switch(chip){
      case "all":
        this.filteredItems = this.items;
        return;
       
      case "basic":
        this.filteredItems = this.items.filter(i => {
          return (
            i.name == "Chain Vest" ||
            i.name == "Recursive Bow" ||
            i.name == "Tear of the Goddess" ||
            i.name == "Negatron Cloak" ||
            i.name == "Sparring Gloves" ||
            i.apiName == "TFT_Item_Spatula" ||
            i.name == "Giant's Belt" ||
            i.name == "Needlessly Large Rod"
          )
        })
        return;

      case "combined":
        this.filteredItems = this.items.filter(i => {
          return i.composition.length > 0 && !(i.apiName.includes("Shimmerscale"));
        })
        return;

      case "consume":
        this.filteredItems = this.items.filter(i => {
          return i.apiName.includes("Consumable");
        })
        return;

      case "nocraft":
        this.filteredItems = this.items.filter(i => {
          return i.desc.includes("cannot be crafted") ||
          (i.name.includes("Emblem") && i.composition.length <= 0)
        })
        return;

      case "ornn":
        this.filteredItems = this.items.filter(i => {
          return i.apiName.includes('Item_Ornn');
        })
        return;

      case "shimmerscale":
        this.filteredItems = this.items.filter(i => {
          return i.apiName.includes("Shimmerscale") 
          && !(i.apiName.includes("_HR"))
          && !(i.apiName.includes("Emblem"))
        })
        return;

      case "radiant":
        this.filteredItems = this.items.filter(i => {
          return i.apiName.includes("Radiant")
        })
        return;

      default:
        this.filteredItems = this.items;
        return;
    }
  }

  getBasicCombinedItems(basics: Item[]){
    basics.forEach(i => {
      let names = this.items.filter( c => {
        return c.composition.includes(i.apiName)
      }).map(n => n.apiName);

      i.composition = names;
    })
    console.log(basics)

  }

}
