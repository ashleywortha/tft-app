import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Data } from '../dataModels/data.model';
import { TraitsService } from '../services/traits.service';
import { Trait } from './trait.model';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent {
  traits: Trait[] = [];
  constructor (private http: HttpClient, private traitsService: TraitsService){}
  ngOnInit(){
    this.traits = this.traitsService.getAllTraits();
    console.log(this.traits);
  }
}

