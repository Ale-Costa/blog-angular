import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsButtonComponent } from './posts-button.component';

describe('PostsButtonComponent', () => {
  let component: PostsButtonComponent;
  let fixture: ComponentFixture<PostsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsButtonComponent]
    });
    fixture = TestBed.createComponent(PostsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
