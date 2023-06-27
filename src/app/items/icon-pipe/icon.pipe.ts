import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(value: any, items: any[]): unknown {
    var iconName = "";
    items = items.filter(i => {
      return i.apiName == value;
    })

    iconName = items[0].icon;

    return iconName;
  }

}
