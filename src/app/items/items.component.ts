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
  combinedColumns: string[] =['item', 'desc', 'recipe']

  // combinedItems:Item[] = [];
  // basicColumns: string[] = ['item', 'desc', 'combined']
  constructor (private http: HttpClient, private itemsService: ItemsService){}
  ngOnInit(){
    this.items = this.itemsService.getAllItems();
    console.log(this.items)
    this.filteredItems = this.items;
    // this.items.forEach(i => {console.log(i.icon)})
  }


  filterItems(chip:string): void{
    switch(chip){
      case "all":
        this.filteredItems = this.items;
        return;
       
      case "basic":
        this.filteredItems = this.items.filter(i => {
          return (i.composition.length <= 0
            && !i.apiName.includes("GenAE")
            && !i.desc.includes("Aphelios")
            && !i.desc.includes("_")
            && !i.apiName.includes("Free")
            && i.unique == false
            && !(Object.keys(i.effects).length === 0)
            )
        })

        return;

      case "combined":
        this.filteredItems = this.items.filter(i => {
          return i.composition.length > 0;
        })
        return;

      case "consume":
        return;

      case "nocraft":
        this.filteredItems = this.items.filter(i => {
          return i.desc.includes("cannot be crafted") ||
          (i.name.includes("Emblem") && i.composition.length <= 0)
        })
        return;

      case "ornn":
        return;

      case "gadge":
        this.filteredItems = this.items.filter(i => {
          return i.apiName.includes("GenAE") && !i.apiName.includes("Emblem")
        })
        return;

      case "radiant":
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
