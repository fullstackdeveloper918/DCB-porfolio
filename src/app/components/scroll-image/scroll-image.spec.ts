import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollImage } from './scroll-image';

describe('ScrollImage', () => {
  let component: ScrollImage;
  let fixture: ComponentFixture<ScrollImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
