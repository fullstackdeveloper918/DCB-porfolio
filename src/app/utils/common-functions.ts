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

export const mapScroll = trigger('mapScroll', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s ease-out', style({ opacity: 1 })),
    ]),
  ]);

export const heroFade = trigger('heroFade', [
    transition(':leave', [
      animate('0.5s ease-in', style({ opacity: 0 }))
    ])
  ]);

export const fadeInOutAnimation = trigger('fadeInOut', [
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
]);

export const fadeInMap =  trigger('fadeInMap', [
  state('inactive', style({ opacity: 0 })),
  state('active', style({ opacity: 1 })),
  transition('inactive => active', animate('1000ms ease-in')),
])

export const fadeinOnScroll =  trigger('fadeInOnScroll', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out'))
    ])