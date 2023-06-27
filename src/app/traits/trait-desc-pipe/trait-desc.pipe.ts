import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traitDesc'
})


export class TraitDescPipe implements PipeTransform {

  transform(value: any, effects: any[]): any {
    var newStr = value;
    effects.forEach(e => {
      newStr = newStr.replace(/\@MinUnits\@/, e['minUnits'])
      newStr = newStr.replace(/\@MagicDamage\@/, e['variables']['MagicDamage'])


    })

    return newStr;
  }

}
