import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import of all app components
import { appComponent } from 'app/app.component';
import { dashboardComponent } from 'app/dashboard/dashboard.component';
import { heroesComponent } from 'app/heroes/heroes.component';
import { heroDetailComponent } from './heroDetail/heroDetail.component';
import { superHeroesService } from './services/superheroes.service';


@NgModule({
  declarations: [
    appComponent,
    dashboardComponent,
    heroesComponent,
    heroDetailComponent
  ],
  //metadata's imports array contains the list of external modules that the app uses
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //array of routes configuration
    RouterModule.forRoot([
      /* Make sure when the app starts, it should show the dashboard
       and display a /dashboard URL in the browser address bar. */
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: heroesComponent
      },
      {
        path: 'dashboard',
        component: dashboardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule {


}
