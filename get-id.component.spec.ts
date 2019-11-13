import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIDComponent } from './get-id.component';

describe('GetIDComponent', () => {
  let component: GetIDComponent;
  let fixture: ComponentFixture<GetIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
