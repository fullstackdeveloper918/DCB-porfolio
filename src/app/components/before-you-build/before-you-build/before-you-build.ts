import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dropdownpage } from '../../../core/services/dropdownpage';
import { BeforeYouBuildContent } from '../../../core/interfaces/dropdown.interface';
import { NgFor, NgIf } from '@angular/common';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-before-you-build',
  imports: [NgFor,NgIf, RouterLink],
  templateUrl: './before-you-build.html',
  styleUrl: './before-you-build.css'
})
export class BeforeYouBuild implements OnInit, AfterViewInit{
  @ViewChildren('textSection') textSections!: QueryList<ElementRef>;
  routeBasedDynamicContent!: BeforeYouBuildContent
  constructor(
  private router : Router, 
  private dropDownPagesService : Dropdownpage){}

  ngOnInit(): void {
  this.routeBasedContentAndImage();
  }

  routeBasedContentAndImage(){
    const currentRoute = this.router.url;
    this.getData(currentRoute);
  }

  getData(route: string) {
  route = route.replace('/', '');
   this.dropDownPagesService.getData(route).subscribe((data: BeforeYouBuildContent) => {
    this.routeBasedDynamicContent = data;
   });
  }


  ngAfterViewInit(): void {
     this.textSections.forEach(section => {
    const lines = section.nativeElement.querySelectorAll('.reveal-line');

    lines.forEach((line: HTMLElement) => {
   
      const words = line.textContent?.trim().split(' ') || [];
      line.innerHTML = ''; 

      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
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
        height:0,
      });
    });
  });
}

    
}
