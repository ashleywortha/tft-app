import { Component } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent {
  champImage = "";

  updateImage(newImage:string){
    this.champImage = newImage;
  }

  allowDrop(ev: any){
    ev.preventDefault();
  }

  drop(ev:any){
    ev.preventDefault();
    if(ev.srcElement.childElementCount < 1){
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
    
  }



}
