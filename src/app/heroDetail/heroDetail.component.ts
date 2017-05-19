/**
 * Created by nelson.dias on 19/05/2017.
 */

// impot the Component library
import { Component, Input } from '@angular/core';

//import the hero class
import { Hero } from '../hero.auxiliar';

// heroDetail component decorator - provides the Angular metadata for the component
@Component({

  selector: 'hero-detail',
  templateUrl: 'heroDetail.component.html'
})


export class heroDetailComponent {

  // must use @Input() to pass values between components

  // the hero property is typed as an instance of Hero, which is declared in hero.auxiliar.ts
  //it receives a hero object through its hero input property and then bind to that property with its template.
  @Input() hero: Hero;

}
