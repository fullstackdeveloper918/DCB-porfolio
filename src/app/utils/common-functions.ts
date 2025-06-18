// animations.ts
import { trigger, style, animate, transition } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100px)' }),
    animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);
