
import { HttpClient } from "@angular/common/http";
import { Injectable, effect } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Portal } from "../dataModels/portal.model";
import { PORTAL_EFFECTS } from "../portals/portalEffectJSON";

@Injectable({providedIn:'root'})
export class PortalsSerive{
    constructor(private http: HttpClient){}
    portals$ = new BehaviorSubject<Portal[]>([]);

    getAllPortals(){
        this.http.get<Portal[]>('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/tftregionportals.json')
        .subscribe(portal => {
           //get rid of duplicates
            portalsIconFixer(portal);
            effectSetter(portal);
            this.portals$.next(portal);
        })
    }
}

function portalsIconFixer(portals: Portal[]){
    portals.forEach(portal => {
        portal.iconPath = portal.iconPath.slice(65);
        portal.iconPath = "https://raw.communitydragon.org/latest/game/assets/characters/tft9_augment/hud/icons2d/" + portal.iconPath;
        portal.iconPath = portal.iconPath.toLowerCase();
    })
}

function effectSetter(portals: Portal[]){
    let effects = PORTAL_EFFECTS
    portals.forEach(portal => {
        let currEffect = effects.find(e => { return e.description === portal.description})
        portal.effects = currEffect?.effect;
    })
}