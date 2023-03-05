import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContentsComponent } from './cards-contents.component';

describe('CardsContentsComponent', () => {
  let component: CardsContentsComponent;
  let fixture: ComponentFixture<CardsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
