import { Component, Input } from '@angular/core';
import { ChampService } from '../services/champ.service';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent {
  champImage = "";
  
  constructor(private champService: ChampService){}

  updateImage(champ:string){
    this.champImage = this.champService.getChampByName(champ)[0].icon;
    // this.champImage = newImage;
  }

  allowDrop(ev: any){
    ev.preventDefault();
  }

  drop(ev:any){
    ev.preventDefault();
    if(ev.srcElement.childElementCount < 1){
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      this.updateImage(data);
    } 
  }



}
