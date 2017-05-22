import { Component, OnInit } from '@angular/core';

//import the hero class
import { Hero } from './auxiliar/hero.auxiliar';
import { superHeroesService } from 'app/services/superheroes.service'; // provides superheroes list

// app component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
    The AppComponent, as well as its child components, can use that service to get hero data.*/
  providers: [superHeroesService]
})

export class AppComponent implements OnInit{

  title = 'Tour of Heroes';
  // assign to a variable the constant HEROES array
  heroes: Hero[];
  selectedHero: Hero;


  /*The constructor itself does nothing. The parameter simultaneously defines a private heroService property
    and identifies it as a superHeroesService injection site.
    Now Angular knows to supply an instance of the superHeroesService when it creates an AppComponent*/
  constructor(private heroService: superHeroesService) { }

  /* When the Promise resolves successfully, you'll have heroes to display.
     Pass the callback function as an argument to the Promise's then() method:*/
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // method that sets the selectedHero property to the hero that the user clicks
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
