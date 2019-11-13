import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIDComponent } from './update-id.component';

describe('UpdateIDComponent', () => {
  let component: UpdateIDComponent;
  let fixture: ComponentFixture<UpdateIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
