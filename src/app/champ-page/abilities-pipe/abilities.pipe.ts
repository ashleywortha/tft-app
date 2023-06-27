import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abilitiesFormat'
})
export class AbilitiesPipe implements PipeTransform {

  transform(value: any, variables: any[]): any {
    /* 
      For each variable
      1. Check if the array values are all the same
      2. IF they are all the same find the corresponding @ and replace
      3. IF they don't all match have it at the bottom as 
      variable name [0]/[1]/[2]

      Once this is done, go through the string and replace all remainging
      @ variables with nothing 
    */
   var newStr = value;
   var levelElms = "";
   console.log(value)
   //replace @v.name@ with v.value[0] if the array has the same number
    variables.forEach(v => {
      if(v.value[1] == v.value[2]){
        if(v.value[0] % 1 != 0){
          v.value[0] = v.value[0] * 100;
          var re = "@" + v.name + "*100@"
          newStr = newStr.replace(re, v.value[1]);
        }
        var re = "@" + v.name + "@"
        newStr = newStr.replace(re, v.value[1]);
      } else {
        levelElms = levelElms + v.name + ": "
        v.value.filter((f: number) => f!=0).forEach((l: string) => {
          levelElms = levelElms + l + "/"
        })
        newStr = newStr + levelElms;
      }
    })
    //remove unnecesary characters 
      newStr = newStr.replace(/\@.*?(?!\@.*).*?\@/g, "")
      newStr = newStr.replace(/\<.*?(?!\<.*).*?\>/g,"")
      // var re = "by %"
      // newStr = newStr.replace(re, "")

    console.log(newStr);
    return newStr;
  }

}
