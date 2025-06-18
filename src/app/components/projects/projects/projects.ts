import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fadeInRight } from '../../../utils/common-functions';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations : [fadeInRight]
})
export class Projects implements AfterViewInit, OnDestroy{
 
  @ViewChildren('projectItem', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  visibleProjects = new Set<number>();
  observer!: IntersectionObserver;

   projects = [
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2025/02/home15_projectpage.jpg',
      title: 'Home 12',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2023/09/mega-home-13.jpg',
      title: 'HOME 11',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home13.jpg',
      title: 'Home 10',
      badge: 'assets/images/badge-finalist.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home12.jpg',
      title: 'Home 9',
      badge: 'assets/images/badge-winner.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home7.jpg',
      title: 'Home 8',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/project_10_cover.jpg',
      title: 'Home 7',
      badge: '',
    },
     {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/mega_proj_5.jpg',
      title: 'Home 6',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2023/09/mega-home-4.jpg',
      title: 'Home 5',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/mega_proj_6.jpg',
      title: 'Home 4',
      badge: 'assets/images/badge-finalist.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home12.jpg',
      title: 'Home 3',
      badge: 'assets/images/badge-winner.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/05/mega_proj_2.jpg',
      title: 'Home 2',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/05/project_4_megamenu.jpg',
      title: 'Home 1',
      badge: '',
    },
  ];


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
  this.sectionContainer.nativeElement.addEventListener('wheel', this.handleWheelEvent, { passive: false });
}


  handleWheelEvent = (event: WheelEvent) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    const scrollSpeedMultiplier = 2;
    this.scrollContainer.nativeElement.scrollLeft += event.deltaY * scrollSpeedMultiplier;
    }
  };


   isVisible(index: number): boolean {
    return this.visibleProjects.has(index);
  }

  ngOnDestroy(): void {
  if (this.observer) {
    this.observer.disconnect();
  }

  if (this.scrollContainer && this.scrollContainer.nativeElement) {
    this.scrollContainer.nativeElement.removeEventListener('wheel', this.handleWheelEvent, { passive: false } as any);
  }
}

}
