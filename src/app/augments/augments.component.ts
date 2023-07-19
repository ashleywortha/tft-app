import { Component } from '@angular/core';
import { Item } from '../items/item.model';
import { AugmentService } from '../services/augments.service';

@Component({
  selector: 'app-augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.scss']
})
export class AugmentsComponent {
  augments: Item[] = [];
  filteredAugments: Item[] = [];
  combinedColumns: string[] = ['augment', 'name', 'tier', 'desc']

  constructor(private augmentService: AugmentService){}
  ngOnInit(){
    this.augmentService.augments$.subscribe(augment => {
      this.augments = augment;
      this.filteredAugments = augment;
    })
    this.augmentService.getAllAugments();
    console.log(this.augments);
  }

  filterAugments(chip: string): void {
    switch(chip){
      case "all":
      this.filteredAugments = this.augments;
      return;

      case "tier1":
        this.filteredAugments = this.augments.filter(a => {
          return(a.tier == '1')
        })
        console.log(this.filteredAugments)

        return;
      
        case "tier2":
          this.filteredAugments = this.augments.filter(a => {
            return(
              a.tier == '2'
              
            )
          })
          console.log(this.filteredAugments)
          return;
        
          case "tier3":
            this.filteredAugments = this.augments.filter(a => {
              return (
                a.tier == '3'
              )
            })
    }
  }

}
