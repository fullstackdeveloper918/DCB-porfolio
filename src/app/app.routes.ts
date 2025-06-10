import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { NewHero } from './components/new-hero/new-hero';

export const routes: Routes = [
    {
        path : '',
        component : Hero
    },
    {
        path : '/newHero',
        component : NewHero
    }
];
