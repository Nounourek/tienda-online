import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCarouselComponent } from './tweet-carousel.component';

describe('TweetCarouselComponent', () => {
  let component: TweetCarouselComponent;
  let fixture: ComponentFixture<TweetCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
