import { Component } from '@angular/core';
import { Trait } from '../traits/trait.model';
import { TraitsService } from '../services/traits.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.sass']
})
export class AdvancedFilterComponent {
  traitsList: Trait[] = [];
  traits = new FormControl('');

  constructor(private traitService: TraitsService){}

  ngOnInit(){
    this.traitService.traits$.subscribe(trait => {
      this.traitsList = trait;
    })
    this.traitService.getAllTraitsrxJS();
    console.log(this.traitsList);

    this.traits.valueChanges.subscribe((selected: any) => {
      selected.forEach((selection: { name: any; }) =>{
        console.log(selection.name)
      })
    })

  }

 



}
