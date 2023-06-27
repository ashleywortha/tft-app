import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.scss']
})
export class TeamBuilderComponent {
  @ViewChild('canvas', {static: true}) myCanvas! : ElementRef;
  board = ['champ2'];
  champs = ['champ1','champ3'];
 //PLAN OF ACTION
  // List 1 is the list of champion icons but when you scroll over them 
  // they have a custom preview -- they are also disabled for sorting

  // List 2-28 are separate sorting groups with a predecate (only has one)
  //in the list at a time -- change the css to be the hexagon shape for the 
  // icon 

  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = [10];

  // drop(event: CdkDragDrop<number[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  todo = [
    ''
  ];

  done = [
    ''
  ];

  review = [
    'Take bath',
    'Wash car',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if(event.container.data.length >= 1){ 
      // transferArrayItem(event.previousContainer)
    }
    else{
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
    
  }


}
