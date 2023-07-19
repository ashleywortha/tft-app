import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChampService } from '../services/champ.service';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent {
  champImage = "";
  @Input() boardPop:String[] = [];
  @Output() addPop = new EventEmitter<string>();

  
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
    if(ev.srcElement.childElementCount < 1 && this.boardPop.length < 11){
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      this.updateImage(data);
      this.addPop.emit(ev);
    } 
  }

  notifyMe(){
    console.log('EventChange')
  }



}
