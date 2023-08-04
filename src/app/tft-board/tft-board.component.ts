import { Component, Input, ViewChild } from '@angular/core';
import { HexagonComponent } from '../hexagon/hexagon.component';

@Component({
  selector: 'app-tft-board',
  templateUrl: './tft-board.component.html',
  styleUrls: ['./tft-board.component.scss']
})
export class TftBoardComponent {
  boardPop:String[] = [];

  @Input() set exitChamp(exitChamp:String){
    console.log("exit champ is " + exitChamp)
    const index: number = this.boardPop.indexOf(exitChamp);
    if(index !== -1){
      this.boardPop.splice(index, 1);
    }
  };

  increasePop(addPop: any){
    let champ = addPop.dataTransfer.getData("text");
    if(!this.boardPop.includes(champ)){
    this.boardPop.push(champ);
    }
  }

}
