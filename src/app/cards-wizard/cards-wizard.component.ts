import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-cards-wizard',
  templateUrl: './cards-wizard.component.html',
  styleUrls: ['./cards-wizard.component.css'],
  animations: [
    trigger('slideInNext', [
      state('true', style({ transform: 'translateX(0) scale(1)' })),
      transition('false => true', [
        style({ transform: 'translateX(50%) scale(0.85)' }),
        animate(300)
      ]), state('false', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition('true => false', [
        animate('300ms ease-in')
      ])
    ]),
    trigger('slideInPrev', [
      state('true', style({ transform: 'translateX(0) scale(1)' })),
      transition('false => true', [
        style({ transform: 'translateX(-50%) scale(0.85)' }),
        animate(300)
      ]), state('false', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition('true => false', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class CardsWizardComponent implements OnInit {

  cards: any[] = [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" },
    { title: "Card 5" }
  ];

  activeCardIndex: number = 0;
  slideStateNext: string = 'false';
  slideStatePrev: string = 'false';

  nextButtonDisabled(): boolean {
    return this.activeCardIndex >= this.cards.length - 1;
  }

  prevButtonDisabled(): boolean {
    return this.activeCardIndex <= 0;
  }

  moveNextCard() {
    this.activeCardIndex += 1;
    this.slideStateNext = 'true';

    setTimeout(() => {
      this.slideStateNext = 'false';
    }, 50);
  }

  movePrevCard() {
    this.activeCardIndex -= 1;
    this.slideStatePrev = 'true';

    setTimeout(() => {
      this.slideStatePrev = 'false';
    }, 50);
  }

  constructor() {
  }

  ngOnInit() {
  }
}