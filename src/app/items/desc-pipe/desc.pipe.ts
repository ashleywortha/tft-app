import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: any, effects: any[]): unknown {
    var newStr = value;

    for( const e in effects){
      var re = "@" + e + "@"
      newStr = newStr.replace(re, effects[e])
    }

    newStr = newStr.replace("<tftitemrules>", "")
    newStr = newStr.replace("</tftitemrules>", "")
    newStr = newStr.replace(/%.*?%/, "");

    return newStr;
  }

}
