import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

// import of all app components
import { AppComponent } from './app.component';
import { heroDetailComponent } from './heroDetail/heroDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    heroDetailComponent
  ],
  //metadata's imports array contains the list of external modules that the app uses
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
