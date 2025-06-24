import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fadeInRight } from '../../../utils/common-functions';
import { ProjectsData } from '../../../utils/Data';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../../core/services/project';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations : [fadeInRight]
})
export class Projects implements AfterViewInit, OnDestroy, OnInit{
 
  @ViewChildren('projectItem', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  visibleProjects = new Set<number>();
  observer!: IntersectionObserver;

  projects:any

  constructor(private projectService : ProjectService, private router : Router){}
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((res:any) =>{
      if(res.status == 200){
       this.projects = res.projects
      }
    })
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


   isVisible(index: number): boolean {
    return this.visibleProjects.has(index);
  }

  // GO TO PARTICLAR PROJECT
goToParticularProject(id: number, projectTitle: string) {
  this.router.navigate(
    ['/projects/particular', id], // Route param: main identifier
    {
      queryParams: { title: projectTitle } // Optional display param
    }
  );
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
