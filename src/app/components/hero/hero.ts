import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  imports: [NgStyle, NgFor],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'visible',
        style({
          opacity: 1,
          zIndex: 1,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          zIndex: 0,
        })
      ),
      transition('hidden => visible', [animate('1s ease-in')]),
      transition('visible => hidden', [animate('1s ease-out')]),
    ]),
  ],
})
export class Hero {
  imageList: string[] = [
    'https://www.mbansw.asn.au/sites/default/files/styles/880x660/public/2019-08/9-DCB%20Project%20Cottage%20Point%20051.jpg?itok=QZIAA_-K',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg',
  ];
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    }, 5000); // 5 seconds per image
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
