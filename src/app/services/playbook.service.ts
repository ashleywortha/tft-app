import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Playbook } from "../dataModels/playbook.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PlaybookService{
    private playbooks: string ="allPlaybooks";
    private currentPlaybook: string = "playbook";
    playbooks$ = new BehaviorSubject<Playbook[]>([]);

    constructor(private http:HttpClient){}

    getAllPlaybooks(){
        this.http.get<Playbook[]>('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/tftplaybooks.json')
        .subscribe(data => {
            let playbookArr = data;
            playbookIconFixer(playbookArr);
            this.playbooks$.next(playbookArr);
        })
    }

}


function playbookIconFixer(playbooks: Playbook[]) {
    playbooks.forEach(playbook=>{
        if(playbook.iconPath == null){
            playbook.iconPath = "https://raw.communitydragon.org/latest/game/assets/characters/pettftavatar/hud/icon_tft_avatar_blue.png";
        } else {
            playbook.iconPath = playbook.iconPath.slice(22);
            playbook.iconPath = "https://raw.communitydragon.org/latest/game/" + playbook.iconPath;
            playbook.iconPath = playbook.iconPath.toLowerCase();
        }
    })
}
