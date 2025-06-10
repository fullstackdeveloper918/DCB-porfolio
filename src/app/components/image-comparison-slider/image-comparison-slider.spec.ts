import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComparisonSlider } from './image-comparison-slider';

describe('ImageComparisonSlider', () => {
  let component: ImageComparisonSlider;
  let fixture: ComponentFixture<ImageComparisonSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComparisonSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComparisonSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
