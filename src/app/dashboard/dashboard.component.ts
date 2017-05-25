/**
 * Created by nelson.dias on 24/05/2017.
 */

import { Component, OnInit } from '@angular/core';

//import the hero class
import { Hero } from '../auxiliar/hero.auxiliar';
import { superHeroesService } from '../services/superheroes.service'; // provides superheroes list

//dashboard decorator
@Component({

  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class dashboardComponent implements OnInit{

  //define an heroes array property
  heroes: Hero[] = [];

  /*Inject the superHeroesService in the constructor and hold it in a private heroService field.
   Now Angular knows to supply an instance of the superHeroesService when it creates the dashboardComponent*/
  constructor(private heroService: superHeroesService) { }

  //Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
  ngOnInit(): void {

    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

  }


}
