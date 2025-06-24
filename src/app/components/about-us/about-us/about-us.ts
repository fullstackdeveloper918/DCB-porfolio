import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollImage } from '../../scroll-image/scroll-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fadeInOutAnimation } from '../../../utils/common-functions';
import { About } from '../../../core/services/about';

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

  teams:any

  awardImages : string [] = [
    'https://www.dcb.com.au/wp-content/uploads/2024/09/nationalbusinessaward2024.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-nationalwinner.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-winner-5m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-winner-2-4m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-winner-1-6m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-finalisst-2-6m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2023-MBOY.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/nationalresidentialbuilding.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2019-housingaward-6m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2019-housingaward-5m.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2019-BestUseofTimber.png',
    'https://www.dcb.com.au/wp-content/uploads/2024/06/2019-MBOY-finalist.png '

  ]
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
    if (res.status === 200) {
      this.heading = res.heading;
      this.heroImage = res.heroData.imageLink;
      this.heroHeading = res.heroData.heroHeading;
      this.heroText = res.heroData.text
      this.teams = res.staffs
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
