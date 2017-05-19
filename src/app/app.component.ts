import { Component } from '@angular/core';

//import the hero class
import { Hero } from './hero.auxiliar';

//create a constant HEROES array of type Hero
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// app component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tour of Heroes';

  // assign to a variable the constant HEROES array
  heroes = HEROES;


  // property to expose the selected hero - set the selectedHero as an Hero property
  selectedHero: Hero;

  // method that sets the selectedHero property to the hero that the user clicks
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
