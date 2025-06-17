import { NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-scroll-image',
  imports: [NgFor,NgIf],
  templateUrl: './scroll-image.html',
  styleUrl: './scroll-image.css'
})
export class ScrollImage {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  currentIndex = 0;

  team = [
    {
      name: 'Jonny Scott',
      role: 'Construction Manager',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/12/edit-Jonny-Scott.jpg',
    },
    {
      name: 'Ethan Flanagan',
      role: 'Site Manager',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/12/edit-EthanFlanagan.jpg',
    },
    {
      name: 'Jack Checkley',
      role: 'Site Manager',
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/02/jackcheckley.jpg',
    },
    {
      name: 'Jack Radford',
      role: 'Site Manager',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/05/JACK-RADFORD.jpg',
    },
      {
      name: 'Sam Salarvand',
      role: 'Site Manager',
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/sam_salarvand.jpg',
    },
     {
      name: 'Helen Carter',
      role: 'Interior Designer',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/12/edit-Helen-Carter.jpg',
    },
     {
      name: 'Stefania Toufan',
      role: 'Project Coordinator',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/05/STEFANIA-TOUFAN.jpg',
    },
      {
      name: 'Michael Brown',
      role: 'Estimator',
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/05/MichaelBrown.jpg',
    },
     {
      name: 'Kylie Rose',
      role: 'Construction Administration',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/12/edit-KylieRose.jpg',
    },
     {
      name: 'MARK QUEALEY',
      role: 'FINANCIAL CONTROLLER',
      image: 'https://www.dcb.com.au/wp-content/uploads/2022/05/MARK-QUEALEY.jpg',
    },
    // Add more members as needed
  ];

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
