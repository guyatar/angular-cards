import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWizardComponent } from './cards-wizard.component';

describe('CardsWizardComponent', () => {
  let component: CardsWizardComponent;
  let fixture: ComponentFixture<CardsWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
