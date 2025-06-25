import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ProjectsData } from '../../../utils/Data';
import { fadeInRight } from '../../../utils/common-functions';

@Component({
  selector: 'app-nahb',
  imports: [NgIf, RouterLink, NgFor],
  templateUrl: './nahb.html',
  styleUrl: './nahb.css',
  animations : [fadeInRight]
})
export class Nahb {
 routeBasedContent: SafeHtml | null = null;
  routeBasedImage:string = ''
  routeBasedTitle!: string
  projects = ProjectsData

  @ViewChildren('projectItem', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  visibleProjects = new Set<number>();
  observer!: IntersectionObserver;    
  

  constructor(private router : Router, private sanitizer : DomSanitizer){}

  ngOnInit(): void {
  this.routeBasedContentAndImage();
  }

  ngAfterViewInit(): void {
  this.observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = this.projectElements.toArray().findIndex(
        (el) => el.nativeElement === entry.target
      );
      if (entry.isIntersecting) {
        this.visibleProjects.add(index);
      }
    });
  }, { threshold: 0.2 });

  this.projectElements.forEach((el) => {
    this.observer.observe(el.nativeElement);
  });

  // Scroll horizontally when wheel is triggered anywhere in section
 if (!this.isMobileDevice()) {
    this.sectionContainer.nativeElement.addEventListener(
      'wheel',
      this.handleWheelEvent,
      { passive: false }
    );
  }
}

isMobileDevice(): boolean {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}



  handleWheelEvent = (event: WheelEvent) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    const scrollSpeedMultiplier = 2;
    this.scrollContainer.nativeElement.scrollLeft += event.deltaY * scrollSpeedMultiplier;
    }
  };

  routeBasedContentAndImage() {
  const currentRoute = this.router.url;
  if (currentRoute === '/20-clubs') {
    const content = `
      <div class="text-sm text-gray-800 space-y-2 leading-relaxed">
        <p>Please enjoy browsing our fellow Builder 20 Club members websites below:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Shaeffer Hyde Construction – Colorado</li>
          <li>Cataldo Builders – E. Falmouth, MA.</li>
          <li>Cabin John Builders – Cabin John, MD.</li>
          <li>Matt Sitra Homes – Austin, TX.</li>
          <li>The Troxel Company – Holland, MI.</li>
          <li>Providence Homes Inc – Arlington, TX.</li>
          <li>Augusta Homes – Cornelius, NC.</li>
          <li>Home Source Builders – Asheville, NC.</li>
          <li>Baud Builders – Wakefield, RI</li>
          <li>Ed Nikles – Milfford PA.</li>
          <li>Raykon Constructions - Salem, UT</li>
          <li>Denman Construction – Whitefish, MT.</li>
          <li>Buffington Homes – Johns Island, SC.</li>
          <li>TM Grady Builders – Luguna, CA.</li>
          <li>Hardwick GC – Maitland, FL.</li>
          <li>G Little – Port Townsend, WA.</li>
          <li>Olsen Custom Homes – Daytona Beach, FL.</li>
          <li>Ellis Custom Homes – College Station, TX.</li>
          <li>Schneider Construction – Norfolk, VA.</li>
          <li>Split Rock Custom Homes - St. George, UT</li>
        </ul>
        <div class="flex justify-center">
        <img src="https://www.dcb.com.au/wp-content/uploads/2017/09/nahb.png"/>
        </div>
      </div>
    `;
    this.routeBasedTitle = '20 Clubs';
    this.routeBasedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    this.routeBasedImage = 'https://www.dcb.com.au/wp-content/uploads/2020/05/nahb_img_1.jpg';
  }
}
   isVisible(index: number) {
    return true;
    // return this.visibleProjects.has(index);
  }

}
