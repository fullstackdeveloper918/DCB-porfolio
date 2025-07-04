import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MobileSidebar } from '../../mobile-sidebar/mobile-sidebar';
import { Footernew } from '../../footernew/footernew';
import { ImageComparisonSlider } from '../../image-comparison-slider/image-comparison-slider';
import { Subscription } from 'rxjs';
import { ImageItem, HomeResponse } from '../../../core/interfaces/home.interface';
import { Home } from '../../../core/services/home';
@Component({
  selector: 'app-new-hero',
  imports: [ImageComparisonSlider, NgFor, Footernew, MobileSidebar, NgClass, NgIf, MobileSidebar],
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
 imageList!: ImageItem[]
    $ubscription! : Subscription
  currentIndex = 0;
  private intervalId: any;
    showMobileMenu = false;
    imagesLoaded = false


  constructor(private homeService:Home){}

  ngOnInit() {
   this.getHomeData();
    this.setIntervalTime();
  }

    getHomeData(){
      this.$ubscription = this.homeService.getHeroData().subscribe((res:HomeResponse) =>{
        if(res.status == 200){
        this.imageList = res.images
        setTimeout(()=>{
            this.imagesLoaded = true;
        },1000)
        }
      })
      }
  
      setIntervalTime(){
          this.intervalId = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
        }, 5000); 
      }
  

   // TOOGLE MOBILE MENU
  toggleMobileMenu(event?:any) {
  this.showMobileMenu = !this.showMobileMenu;
  console.log('this.showMobileMenu', this.showMobileMenu)
}

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
