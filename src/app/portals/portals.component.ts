import { Component } from '@angular/core';
import { PortalsSerive } from '../services/portals.service';
import { Portal } from '../dataModels/portal.model';

@Component({
  selector: 'app-portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})
export class PortalsComponent {
  portals: Portal[] = [];
  filteredPortals: Portal[] = [];
  combinedColumns: string[] = ['portal', 'name', 'region', 'desc']

  constructor(private portalsService: PortalsSerive){}

  ngOnInit(){
    this.portalsService.portals$.subscribe(portal => {
      this.portals = portal;
      this.filteredPortals = portal;
    })
    this.portalsService.getAllPortals();
  }

  filterPortals(chip: string):void{
    switch(chip){
      case "all":
        this.filteredPortals = this.portals;
        return;
      case "bandle":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Bandle City'))
        });
        return;
      case "demacia":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Demacia'))
        });
          return;
      case "freljord":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Freljord'))
        });
          return;
      case "ionia":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Ionia'))
        });
        return;
      case "noxus":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Noxus'))
        });
        return;
      case "piltover":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Piltover'))
        });
        return;
      case "shadow":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Shadow Isles'))
        });
        return;
      case "shurima":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Shurima'))
        });
        return;
      case "targon":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Targon'))
        });
        return;
      case "void":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Void'))
        });
        return;
      case "zaun":
        this.filteredPortals = this.portals.filter( p =>{
          return (p.displayName.includes('Zaun'))
        });
        return;
    }
  }

}
