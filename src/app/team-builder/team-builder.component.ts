import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChampService } from '../services/champ.service';
import { Champion } from '../champs/champion.model';
import { HexagonComponent } from '../hexagon/hexagon.component';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.scss']
})
export class TeamBuilderComponent {
  allChamps: Champion[] = [];
  boardChamps: Champion[] = []
  currentChamps: Champion[] = [];
  currentChamp: String = "";
  // @ViewChild('appHexagon', { static: false }) appHexagon!: HexagonComponent;
  //https://stackoverflow.com/questions/60565421/angular-8-drag-drop-dragover-dragleave-events-not-firing

  /*Todos V2
  GOAL: Drag and drop champions onto the field
  1. Make champion select group and sort (traits(checkbox), cost) 
  3. Image fills hexagon on drop
  4. Champ Pool is in rows, names below them
  */

  constructor(private champService: ChampService){}
 
  ngOnInit(){
    this.champService.champs$.subscribe(champ => {
      this.allChamps = champ;
    })
    this.champService.getAllChamps()
  }

  drag(ev:any){
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev:any){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.currentChamp = data;
    console.log(ev)
  }

  allowDrop(ev:any){
    ev.preventDefault();
  }
}
