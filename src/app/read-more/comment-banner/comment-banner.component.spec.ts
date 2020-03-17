import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBannerComponent } from './comment-banner.component';

describe('CommentBannerComponent', () => {
  let component: CommentBannerComponent;
  let fixture: ComponentFixture<CommentBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
