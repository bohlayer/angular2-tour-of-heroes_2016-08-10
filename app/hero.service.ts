import { Injectable } from '@angular/core';

//import of Hero only needed if including getHeroesSlowly method
import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  //getHeroesSlowly simulates a slow connection //called from app.component.ts
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  } 

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id));
  }

}
