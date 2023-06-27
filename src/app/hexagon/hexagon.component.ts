import { Component } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent {
  champImage = "https://i.imgur.com/waDgcnc.jpg";

  updateImage(newImage:string){
    this.champImage = newImage;
  }



}
