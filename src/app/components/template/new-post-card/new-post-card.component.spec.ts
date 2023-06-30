import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostCardComponent } from './new-post-card.component';

describe('NewPostCardComponent', () => {
  let component: NewPostCardComponent;
  let fixture: ComponentFixture<NewPostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPostCardComponent]
    });
    fixture = TestBed.createComponent(NewPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
