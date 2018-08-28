// import { animate, state, style, transition, trigger } from '@angular/animations';
//
// export const slideInOut = trigger('slideInOut', [
//
//     transition(':enter', [
//
//         style({ transform: 'translateY(-90%)' }),
//         animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
//
//     ]),
//     //
//     // transition(':leave', [
//     //
//     //     animate('400ms ease-in', style({ transform: 'translateY(-90%)' }))
//     //
//     // ])
//
// ]);
//
// export const slideTopDown = trigger('slideTopDown', [
//
//     transition(':enter', [
//
//         style({ transform: 'translateY(-90%)' }),
//         animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
//
//     ]),
//
// ]);
//
// export const slideLeftRight = trigger('slideLeftRight', [
//
//     transition(':enter', [
//
//         style({ transform: 'translateX(-90%)' }),
//         animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
//
//     ]),
//
//     transition(':leave', [
//
//         animate('400ms ease-in', style({ transform: 'translateX(-90%)' }))
//
//     ])
//
// ]);
//
// export const fadeInOut = trigger('fadeInOut', [
//
//     // the "in" style determines the "resting" state of the element when it is visible.
//     state('in', style({ opacity: 1 })),
//
//     // fade in when created. this could also be written as transition('void => *')
//     transition(':enter', [
//
//         style({ opacity: 0 }),
//         animate(600)
//
//     ]),
//
//     // fade out when destroyed. this could also be written as transition('void => *')
//     transition(':leave', animate(600, style({ opacity: 0 })))
//
// ]);
