import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {MyTeams,Tournaments,Teams,TeamDetails,Game} from "../pages/page";

@NgModule({
  declarations: [
    MyApp,
    MyTeams,
    Tournaments,
    Teams,
    TeamDetails,
    Game
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   MyTeams,
   Tournaments,
   Teams,
   TeamDetails,
   Game
  ],
  providers: []
})
export class AppModule {}
