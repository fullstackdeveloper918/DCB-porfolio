import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero/hero';
import { NewHero } from './components/new-hero/new-hero/new-hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, NewHero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'DCB-01';
}
