import { Component } from '@angular/core';
import { ChampService } from './services/champ.service';
import { ItemsService } from './services/items.service';
import { TraitsService } from './services/traits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tft-app';
  constructor(private champService: ChampService, private traitsService: TraitsService, private itemsService: ItemsService){}
  async ngOnInit(){
    await this.champService.setAllChamps();
    await this.traitsService.setAllTraits();
    await this.itemsService.setAllItems();
  }
}
