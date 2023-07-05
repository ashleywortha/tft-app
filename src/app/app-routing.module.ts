import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampPageComponent } from './champ-page/champ-page.component';
import { ChampsComponent } from './champs/champs.component';
import { FilterChipsComponent } from './filter-chips/filter-chips.component';
import { ItemsComponent } from './items/items.component';
import { TraitsComponent } from './traits/traits.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { PlaybooksComponent } from './playbooks/playbooks.component';

const routes: Routes = [
  {path:'', component:FilterChipsComponent, pathMatch:'full'},
  {path:'champion/:name', component:ChampPageComponent},
  {path:'champions', component:FilterChipsComponent},
  {path:'trait/:name', component:TraitsComponent},
  {path:'traits', component:TraitsComponent},
  {path:'items/:name', component:ItemsComponent},
  {path:'items', component:ItemsComponent},
  {path:'champpage', component:ChampPageComponent},
  {path:'builder', component: TeamBuilderComponent},
  {path:'legends', component:PlaybooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
