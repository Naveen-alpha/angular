import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIDComponent } from './delete-id.component';

describe('DeleteIDComponent', () => {
  let component: DeleteIDComponent;
  let fixture: ComponentFixture<DeleteIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
