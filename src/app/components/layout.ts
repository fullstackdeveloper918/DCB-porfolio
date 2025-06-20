import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MobileSidebar } from './mobile-sidebar/mobile-sidebar';
import { Footer } from './footer/footer';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgIf, MobileSidebar,Footer, NgFor, RouterOutlet, NgClass, NgStyle],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
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
export class Layout {
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
    showMobileMenu = false;

    constructor(private route : ActivatedRoute, private router : Router){
      console.log('activate route',  this.route.routeConfig?.path)
    }

    ngOnInit() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
      }, 5000); // 5 seconds per image
    }

    ngOnDestroy() {
      clearInterval(this.intervalId);
    }

    // TOOGLE MOBILE MENU
    toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  isHeroModule(){
    return this.route.routeConfig?.path == 'Hero';
  }
  isHero(){
    const path = this.route.routeConfig?.path || '';
  return path.includes('Hero') || path.includes('contact-us');
  }

  isProjectModule(){
    return this.route.routeConfig?.path == 'projects';
  }
  goToHomePage(){
    this.router.navigate(['/Hero'])
  }
}
