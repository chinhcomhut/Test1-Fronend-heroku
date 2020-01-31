import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesingerComponent } from './updatesinger.component';

describe('UpdatesingerComponent', () => {
  let component: UpdatesingerComponent;
  let fixture: ComponentFixture<UpdatesingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
