import { Component } from '@angular/core';
import { Playbook } from '../dataModels/playbook.model';
import { PlaybookService } from '../services/playbook.service';

@Component({
  selector: 'app-playbooks',
  templateUrl: './playbooks.component.html',
  styleUrls: ['./playbooks.component.sass']
})
export class PlaybooksComponent {
  playbooks: Playbook[] = [];
  combinedColumns: string[] = ['legend', 'desc', 'earlyAugs', 'midAugs', 'lateAugs']

  constructor(private playbookService: PlaybookService){}
  ngOnInit(){
    this.playbookService.playbooks$.subscribe(playbook => {
      this.playbooks = playbook;
    })
    this.playbookService.getAllPlaybooks();
    console.log(this.playbooks);
  }

}
