import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkullHeaderComponent } from './skull-header/skull-header.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RulePageComponent } from './rule-page/rule-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SkullHeaderComponent,
    GamePageComponent,
    RulePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
