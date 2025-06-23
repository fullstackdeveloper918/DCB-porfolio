import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Footer } from '../../footer/footer';
import { ImageComparisonSlider } from '../../image-comparison-slider/image-comparison-slider';
import { MobileSidebar } from '../../mobile-sidebar/mobile-sidebar';

@Component({
  selector: 'app-hero',
  imports: [NgStyle, NgFor, Footer, ImageComparisonSlider, NgIf, MobileSidebar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'visible',
        style({
          opacity: 1,
          zIndex: 1,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          zIndex: 0,
        })
      ),
      transition('hidden => visible', [animate('1s ease-in')]),
      transition('visible => hidden', [animate('1s ease-out')]),
    ]),
  ],
})
export class Hero implements OnInit{

  constructor(){}

  ngOnInit() {
  }

}
