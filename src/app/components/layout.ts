import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MobileSidebar } from './mobile-sidebar/mobile-sidebar';
import { Footer } from './footer/footer';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Home } from '../core/services/home';
import { HomeResponse, ImageItem } from '../core/interfaces/home.interface';
import { fadeInOutAnimation } from '../utils/common-functions';

@Component({
  selector: 'app-layout',
  imports: [NgIf, MobileSidebar,Footer, NgFor, RouterOutlet, NgClass, NgStyle],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  animations: [fadeInOutAnimation],
})
export class Layout {
    imageList!: ImageItem[]
    $ubscription! : Subscription
    currentIndex = 0;
    private intervalId: any;
    showMobileMenu = false;
    imagesLoaded = false
    constructor(private route : ActivatedRoute, private router : Router, private homeService : Home){}
    ngOnInit() {
    this.getHomeData();
    this.setIntervalTime();
    }

    getHomeData(){
    this.$ubscription = this.homeService.getHeroData().subscribe((res:HomeResponse) =>{
      if(res.status == 200){
      this.imageList = res.images
          this.imagesLoaded = true;
      }
    })
    }

    setIntervalTime(){
        this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
      }, 5000); 
    }

    ngOnDestroy() {
      clearInterval(this.intervalId);
    }

    // TOOGLE MOBILE MENU
    toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  isHeroModule(){
    return this.route.routeConfig?.path == 'Home';
  }

  isHeroContactUs(): boolean {
    const url = this.router.url;
    return url.includes('Home') || url.includes('contact-us') || url.includes('projects/particular') || url.includes('our-references');
  }

    isProjectModule(){
      return this.route.routeConfig?.path == 'projects';
    }
    goToHomePage(){
      this.router.navigate(['/Home'])
    }


}
