import { trigger, transition, query, style, group, animate, stagger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        //Set elements' starting state:
        query(':enter, :leave', style({ position: 'fixed', width: '100%', opacity: 0 }), { optional: true }),
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':enter app-card', style({ opacity: 0 }), { optional: true }),
        query(':enter .arrow', style({ opacity: 0 }), { optional: true }),
        query(':leave .arrow', style({ opacity: 1 }), { optional: true }),
        query('.arrow-right', style({ transform: 'translateX(-100%)' }), { optional: true }),
        query('.arrow-left', style({ transform: 'translateX(100%)' }), { optional: true }),
        //Side arrows leave animation:
        group([
            query(':leave .arrow-right', [
                style({ transform: 'translateX(0%)', opacity: 1 }),
                animate('500ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
            ], { optional: true }),
            query(':leave .arrow-left', [
                style({ transform: 'translateX(0%)', opacity: 1 }),
                animate('500ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
            ], { optional: true })
        ]),
        //Cards leave animation:
        query(':leave app-card', stagger(400, [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('500ms ease-in-out', style({ transform: 'translateY(100%)', opacity: 0 }))
        ]), { optional: true }),
        //Page routing animations:
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('700ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ]),
        //Side arrows enter animation:
        group([
            query(':enter .arrow-right', [
                style({ transform: 'translateX(-100%)' }),
                animate('500ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
            ], { optional: true }),
            query(':enter .arrow-left', [
                style({ transform: 'translateX(100%)' }),
                animate('500ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
            ], { optional: true })
        ]),
        //Cards showing up animation:
        query(':enter app-card', stagger(400, [
            style({ transform: 'translateY(100px)' }),
            animate('1s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ]), { optional: true })
    ])
])