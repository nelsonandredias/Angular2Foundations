/**
 * Created by nelson.dias on 19/05/2017.
 */

// impot the Component library
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

//import the hero class
import { Hero } from 'app/auxiliar/hero.auxiliar';
import { superHeroesService } from '../services/superheroes.service'; // provides superheroes list

// heroDetail component decorator - provides the Angular metadata for the component
@Component({

  selector: 'hero-detail',
  templateUrl: 'heroDetail.component.html'
})


export class heroDetailComponent implements OnInit{


  constructor(
    private heroService: superHeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // the Location service allows to step back in the browser's history (go to previous page)
  }

  // must use @Input() to pass values between components

  /* the hero property is typed as an instance of Hero, which is declared in hero.auxiliar.ts
  it receives a hero object through its hero input property and then bind to that property with its template.*/
  @Input() hero: Hero;

}
