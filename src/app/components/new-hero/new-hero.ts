import { Component } from '@angular/core';
import { ImageComparisonSlider } from '../image-comparison-slider/image-comparison-slider';
import { Footer } from '../footer/footer';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-new-hero',
  imports: [ImageComparisonSlider, Footer, NgFor],
  templateUrl: './new-hero.html',
  styleUrl: './new-hero.css',
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
export class NewHero {
 imageList: string[] = [
    '/image 3.png',
    '/image 8.png',
    '/2_dcb23856827.jpg',
    '/20181021-Fitzpatrick-Sugarloaf-Castlecrag__JG_5188-min.jpg',
    '/B8.jpg',
    '/B9.jpg',
    '/B11.jpg',
    'home15_homepagebanner.jpg',
    '/home15_homepagebanner1.jpg',
    '/homebanner_6.jpg',
    '/homebanner_10.jpg',
    '/homeslider-23-23-04-25.jpg',
    '/homeslider-24-23-04-25.jpg',
    '/homeslider-25-23-04-25.jpg',
    '/IMG_0004-min.jpg'
  ];
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    }, 5000); // 5 seconds per image
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
