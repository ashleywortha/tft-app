import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampsComponent } from './champs/champs.component';
import { TraitsComponent } from './traits/traits.component';
import { ItemsComponent } from './items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchComponent } from './search/search.component';
import { FilterChipsComponent } from './filter-chips/filter-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import { ChampPageComponent } from './champ-page/champ-page.component';
import { SynergiesComponent } from './synergies/synergies.component';
import {MatButtonModule} from '@angular/material/button';
import { AbilitiesPipe } from './champ-page/abilities-pipe/abilities.pipe';
import {MatTable, MatTableModule} from '@angular/material/table';
import { IconPipe } from './items/icon-pipe/icon.pipe';
import { DescPipe } from './items/desc-pipe/desc.pipe';
import { TraitDescPipe } from './traits/trait-desc-pipe/trait-desc.pipe';
import { AugmentsComponent } from './augments/augments.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HexagonComponent } from './hexagon/hexagon.component';
@NgModule({
  declarations: [
    AppComponent,
    ChampsComponent,
    TraitsComponent,
    ItemsComponent,
    SearchComponent,
    FilterChipsComponent,
    ChampPageComponent,
    SynergiesComponent,
    AbilitiesPipe,
    IconPipe,
    DescPipe,
    TraitDescPipe,
    AugmentsComponent,
    TeamBuilderComponent,
    HexagonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
