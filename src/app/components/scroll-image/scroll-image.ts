import { NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, ViewChild, Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Team } from '../../utils/Data';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-scroll-image',
  imports: [NgFor,NgIf],
  templateUrl: './scroll-image.html',
  styleUrl: './scroll-image.css'
})
export class ScrollImage {
  @Input() teams : any
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  currentIndex = 0;

  ngAfterViewInit() {
    const names = this.containerRef.nativeElement.querySelectorAll('.name');

    names.forEach((el: HTMLElement, index: number) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.currentIndex = index,
        onEnterBack: () => this.currentIndex = index,
      });
    });
  }
}
