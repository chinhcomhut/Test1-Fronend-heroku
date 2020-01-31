import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingerUserComponent } from './list-singer-user.component';

describe('ListSingerUserComponent', () => {
  let component: ListSingerUserComponent;
  let fixture: ComponentFixture<ListSingerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSingerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
