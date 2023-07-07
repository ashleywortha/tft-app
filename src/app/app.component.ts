import { Component } from '@angular/core';
import { ChampService } from './services/champ.service';
import { ItemsService } from './services/items.service';
import { TraitsService } from './services/traits.service';
import { PlaybookService } from './services/playbook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tft-app';
  constructor(){}
  ngOnInit(){
  }
}
