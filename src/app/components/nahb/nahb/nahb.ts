import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ProjectsData } from '../../../utils/Data';
import { fadeInRight } from '../../../utils/common-functions';
import { NahbService } from '../../../core/services/nahb';
import { Builder20ClubData } from '../../../core/interfaces/nahb.interface';

@Component({
  selector: 'app-nahb',
  imports: [NgIf, RouterLink, NgFor, NgStyle],
  templateUrl: './nahb.html',
  styleUrl: './nahb.css',
  animations : [fadeInRight]
})
export class Nahb {
 routeBasedContent: SafeHtml | null = null;
  routeBasedImage:string = ''
  routeBasedTitle!: string
  projects = ProjectsData
  data! : Builder20ClubData

  @ViewChildren('projectItem', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  visibleProjects = new Set<number>();
  observer!: IntersectionObserver;    
  

  constructor(
  private router : Router,
  private nahbService : NahbService
){}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.nahbService.getData().subscribe((res:Builder20ClubData) => {
      if(res.status == 200){
        this.data = res;
        console.log('data', this.data);
      }
    });
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
   this.scrollContainer.nativeElement.addEventListener(
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


   isVisible(index: number) {
    return true;
    // return this.visibleProjects.has(index);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
