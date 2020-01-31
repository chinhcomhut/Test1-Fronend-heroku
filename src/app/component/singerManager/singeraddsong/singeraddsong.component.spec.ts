import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeraddsongComponent } from './singeraddsong.component';

describe('SingeraddsongComponent', () => {
  let component: SingeraddsongComponent;
  let fixture: ComponentFixture<SingeraddsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingeraddsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingeraddsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
