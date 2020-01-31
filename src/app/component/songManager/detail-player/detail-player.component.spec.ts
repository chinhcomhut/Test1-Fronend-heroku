import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlayerComponent } from './detail-player.component';

describe('DetailPlayerComponent', () => {
  let component: DetailPlayerComponent;
  let fixture: ComponentFixture<DetailPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
