import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollImage } from '../../scroll-image/scroll-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fadeInOutAnimation } from '../../../utils/common-functions';
import { About } from '../../../core/services/about';
import { awardImages } from '../../../utils/Data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-us',
  imports: [ScrollImage],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  animations: [fadeInOutAnimation],
})
export class AboutUs {
  @ViewChildren('textSection') textSections!: QueryList<ElementRef>;
  teams:any

  awardImages : any = awardImages
  currentIndex = 0;
  showMobileMenu = false;
  heading!:string
  heroImage!:string
  heroHeading!:string
  heroText!:string

  constructor(private aboutService : About, private cdr : ChangeDetectorRef){}

  ngOnInit() {
    this.getAboutData();
  }

  // GET ABOUT DATA
 getAboutData() {
  this.aboutService.getAboutData().subscribe((res: any) => {
    console.log('About Data:', res);
    if (res.status === 200) {
      this.heading = res.heading;
      this.heroImage = res.heroData.imageLink;
      this.heroHeading = res.heroData.heroHeading;
      this.heroText = res.heroData.text
      this.teams = res.staffs
      // this.awardImages = res.awards
      setTimeout(() => {
        this.cdr.detectChanges(); 
        this.animateTextSections();
      }, 100); 
    }
  });
}


  ngOnDestroy() {
  }

  // TOOGLE MOBILE MENU
  toggleMobileMenu() {
  this.showMobileMenu = !this.showMobileMenu;
}

// ngAfterViewInit() {
//   this.textSections.forEach(section => {
//     const lines = section.nativeElement.querySelectorAll('.reveal-line');

//     lines.forEach((line: HTMLElement) => {
   
//       const words = line.textContent?.trim().split(' ') || [];
//       line.innerHTML = ''; 

//       words.forEach((word, index) => {
//         const wordSpan = document.createElement('span');
//         wordSpan.textContent = word + ' ';
//         wordSpan.innerHTML = word + '&nbsp;';
//         wordSpan.style.display = 'inline-block';
//         wordSpan.style.overflow = 'hidden';
//         line.appendChild(wordSpan);
//       });

//       const wordSpans = line.querySelectorAll('span');

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: line,
//           start: 'top 85%',
//           toggleActions: 'play none none none',
//         }
//       });

//       tl.from(wordSpans, {
//         y: 50,
//         opacity: 0.4,
//         duration: 1,
//         ease: 'power3.out',
//         stagger: 0.01,
//         height:0,
//       });
//     });
//   });
// }

animateTextSections() {
  this.textSections.forEach(section => {
    const lines = section.nativeElement.querySelectorAll('.reveal-line');

    lines.forEach((line: HTMLElement) => {
      const words = line.textContent?.trim().split(' ') || [];
      line.innerHTML = '';

      words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.innerHTML = word + '&nbsp;';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.overflow = 'hidden';
        line.appendChild(wordSpan);
      });

      const wordSpans = line.querySelectorAll('span');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      tl.from(wordSpans, {
        y: 50,
        opacity: 0.4,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.01,
      });
    });
  });
}



}
