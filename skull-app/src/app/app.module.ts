import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkullHeaderComponent } from './skull-header/skull-header.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RulePageComponent } from './rule-page/rule-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HandComponent } from './hand/hand.component';
import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
  { path: 'rules', component: RulePageComponent },
  { path: 'main',      component: GamePageComponent },
  { path: '',
    redirectTo: 'rules',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SkullHeaderComponent,
    GamePageComponent,
    RulePageComponent,
    PageNotFoundComponent,
    HandComponent,
    BoardComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



