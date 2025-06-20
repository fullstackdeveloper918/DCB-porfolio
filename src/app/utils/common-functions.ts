// animations.ts
import { trigger, style, animate, transition, state } from '@angular/animations';

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


export const zoomIn = trigger('zoomIn', [
    state('void', style({ transform: 'scale(0)', opacity: 0 })),
    transition(':enter', [
      animate('1.2s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
    ])
  ])

export const slideInUp = trigger('slideInUp', [
  state('out', style({ transform: 'translateY(40px)', opacity: 0 })),
  state('in', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('out => in', animate('900ms ease-out')),
]);