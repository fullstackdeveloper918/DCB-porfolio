import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgFor } from '@angular/common';
import { MobileSidebar } from '../../mobile-sidebar/mobile-sidebar';
import { Footernew } from '../../footernew/footernew';
import { ImageComparisonSlider } from '../../image-comparison-slider/image-comparison-slider';
import { fadeInOutAnimation } from '../../../utils/common-functions';
import { Subscription } from 'rxjs';
import { ImageItem, HomeResponse } from '../../../core/interfaces/home.interface';
import { Home } from '../../../core/services/home';
@Component({
  selector: 'app-new-hero',
  imports: [ImageComparisonSlider, NgFor, Footernew, MobileSidebar],
  templateUrl: './new-hero.html',
  styleUrl: './new-hero.css',
   animations: [fadeInOutAnimation],
})
export class NewHero {
 imageList!: ImageItem[]
 $ubscription! : Subscription
  currentIndex = 0;
  private intervalId: any;
  showMobileMenu = false;
      imagesLoaded = false

  constructor(private homeService: Home){}

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
  

   // TOOGLE MOBILE MENU
  toggleMobileMenu() {
  this.showMobileMenu = !this.showMobileMenu;
}

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
