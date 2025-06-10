import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-comparison-slider',
  imports: [],
  templateUrl: './image-comparison-slider.html',
  styleUrl: './image-comparison-slider.css'
})
export class ImageComparisonSlider {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const component = this.el.nativeElement.querySelector('[data-component="image-comparison-slider"]');
    const sliderRange = component.querySelector('[data-image-comparison-range]');
    const slider = component.querySelector('[data-image-comparison-slider]');
    const overlay = component.querySelector('[data-image-comparison-overlay]');
    const thumb = component.querySelector('[data-image-comparison-thumb]');

    function setSliderState(e: any) {
      if (e.type === 'input') {
        sliderRange.classList.add('image-comparison__range--active');
        return;
      }
      sliderRange.classList.remove('image-comparison__range--active');
      component.removeEventListener('mousemove', moveThumb);
    }

    function moveThumb(e: MouseEvent) {
      let position = e.layerY - 20;
      if (e.layerY <= sliderRange.offsetTop) position = -20;
      if (e.layerY >= sliderRange.offsetHeight) position = sliderRange.offsetHeight - 20;
      thumb.style.top = `${position}px`;
    }

    function moveSlider(e: any) {
      const value = e.target.value;
      slider.style.left = `${value}%`;
      overlay.style.width = `${value}%`;
      component.addEventListener('mousemove', moveThumb);
      setSliderState(e);
    }

    if (!('ontouchstart' in window)) {
      sliderRange.addEventListener('mouseup', setSliderState);
      sliderRange.addEventListener('mousedown', moveThumb);
    }

    sliderRange.addEventListener('input', moveSlider);
    sliderRange.addEventListener('change', moveSlider);
  }
}
