import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselListSingerComponent } from './carousel-list-singer.component';

describe('CarouselListSingerComponent', () => {
  let component: CarouselListSingerComponent;
  let fixture: ComponentFixture<CarouselListSingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselListSingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselListSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
