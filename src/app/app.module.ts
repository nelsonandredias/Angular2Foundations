import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import of all app components
import { appComponent } from 'app/app.component';
import { heroesComponent } from 'app/heroes/heroes.component';
import { heroDetailComponent } from './heroDetail/heroDetail.component';
import { superHeroesService } from './services/superheroes.service';


@NgModule({
  declarations: [
    appComponent,
    heroesComponent,
    heroDetailComponent
  ],
  //metadata's imports array contains the list of external modules that the app uses
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //array of route definitions
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: heroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule {


}
