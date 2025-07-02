import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OurReference } from '../../../core/services/our-reference';
import { referencesData, videosData, housreviwes, OurRefercneProjects } from '../../../utils/Data';
import { Awards } from '../../about-us/awards/awards';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { fadeinOnScroll } from '../../../utils/common-functions';

@Component({
  selector: 'app-our-reference-1',
  imports: [ReactiveFormsModule, NgFor, NgIf, NgClass, Awards, RouterLink],
  templateUrl: './our-reference-1.html',
  styleUrl: './our-reference-1.css',
  animations : [fadeinOnScroll]
})
export class OurReference1 implements AfterViewInit {
@ViewChild('slider', { static: false }) slider!: ElementRef;
@ViewChild('h2Section') h2Section!: ElementRef;
@ViewChild('card1') card1!: ElementRef;
@ViewChild('card2') card2!: ElementRef;
@ViewChild('card3') card3!: ElementRef;
sectionVisibility = {
  h2: false,
  card1: false,
  card2: false,
  card3: false,
};
data:any
selectedCategory = 'RESIDENTIAL';
referencesData = referencesData;
videosData = videosData;

houseimages:any = housreviwes
projects :any = OurRefercneProjects
constructor(private referenceService : OurReference){}



ngOnInit() {
  this.getReferenceData();
}

ngAfterViewInit(): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).id;
        this.sectionVisibility[id as keyof typeof this.sectionVisibility] = true;
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, { threshold: 0.2 });

  const sections = [
    { el: this.h2Section, id: 'h2' },
    { el: this.card1, id: 'card1' },
    { el: this.card2, id: 'card2' },
    { el: this.card3, id: 'card3' },
  ];

  sections.forEach(({ el, id }) => {
    el.nativeElement.id = id; // Set an id to track in observer
    observer.observe(el.nativeElement);
  });
}




getReferenceData(){
  this.referenceService.getReferenceData().subscribe((res:any)=>{
    if(res.status == 200){
      this.data = res
      console.log('this.data', this.data)
    }
  });
}


scrollLeft() {
  this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}
