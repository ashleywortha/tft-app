import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ChampService } from '../services/champ.service';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent {
  champImage = "";
  prevChamp = "";
  full:boolean = false;
  @Input() boardPop:String[] = [];
  @Output() addPop = new EventEmitter<string>();
  @Input() id:Number = 0;

  /* Issue: You can drag champs into one another as drop zones? */

  
  constructor(private champService: ChampService){}

  updateImage(champ:string){
    this.prevChamp = this.champImage;
    if(champ !== ""){
      this.champImage = this.champService.getChampByName(champ)[0].icon;
    } else {
      this.champImage = champ;
    }
  }

  allowDrop(ev: any){
    ev.preventDefault();
  }

  drop(ev:any){
    ev.preventDefault();
    // console.log("drop")
    console.log("drop: " + this.full)
    if(ev.srcElement.childElementCount === 0 && this.boardPop.length < 11){
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      this.updateImage(data);
      this.addPop.emit(ev);
      this.full = true;
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(ev:any){
    ev.preventDefault();
    console.log("leave: " + this.full)
    if(ev.srcElement.childElementCount === 0){
      this.updateImage("");
    }
  }

  @HostListener('dragend', ['$event']) public onDragEnd(ev:any){
    ev.preventDefault();
    console.log("end: " + this.full)
    if(ev.dataTransfer.dropEffect === 'none' || (this.full && this.prevChamp != '')){
      this.champImage = this.prevChamp;
    }
  }




}
