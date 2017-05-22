/**
 * Created by nelson.dias on 22/05/2017.
 */

/* Service allows to reuse data injecting it into the components that need it.
   I can easily share the list of heroes with other components and views.*/

import { Injectable } from '@angular/core';

import { Hero } from 'app/auxiliar/hero.auxiliar'; // calling Hero's properties
import { HEROES } from 'app/auxiliar/heroesList.auxiliar'; // calling HEROES array

// superheros Injectable decorator - provides the Angular metadata for the service
@Injectable ()

export class superHeroesService {

  // method that returns the superHero List - make it available to any component through a promise
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
