import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Playbook } from "../dataModels/playbook.model";

@Injectable({
    providedIn:'root'
})

export class PlaybookService{
    private playbooks: string ="allPlaybooks";
    private currentPlaybook: string = "playbook";
    constructor(private http:HttpClient){}

    setAllPlaybooks(){
        this.http.get<Playbook[]>('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/tftplaybooks.json')
        .subscribe(data => {
            console.log(data)
            let playBookArr = data
            playbookIconFixer(playBookArr);
            localStorage.setItem(this.playbooks, JSON.stringify(playBookArr))
        })
    }

    getAllPlaybooks(){
        let playbooks = JSON.parse(localStorage.getItem(this.playbooks) || "[]");
        return playbooks;
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
