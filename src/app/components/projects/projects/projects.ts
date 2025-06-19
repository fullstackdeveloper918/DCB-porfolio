import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fadeInRight } from '../../../utils/common-functions';
import { ProjectsData } from '../../../utils/Data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, RouterLink],
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

  projects = ProjectsData

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
