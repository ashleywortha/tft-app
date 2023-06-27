import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: any, effects: any[]): unknown {
    var newStr = value;

    //Grant 45 bonus starting Mana. 
    //Once per combat: At 40% Health, 
    //gain a 25% maximum Health shield that lasts 
    //up to 5 seconds and 35 Armor and 
    //35 Magic Resist for the rest of combat

    for( const e in effects){
      var re = "@" + e + "@"
      newStr = newStr.replace(re, effects[e])
    }

    newStr = newStr.replace("<tftitemrules>", "")
    newStr = newStr.replace("</tftitemrules>", "")


    return newStr;
  }

}
