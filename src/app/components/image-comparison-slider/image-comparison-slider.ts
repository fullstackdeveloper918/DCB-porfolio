import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-comparison-slider',
  imports: [],
  templateUrl: './image-comparison-slider.html',
  styleUrl: './image-comparison-slider.css'
})
export class ImageComparisonSlider {

 content = [
    {
      projectYear: 'Project Year -2023',
      projectName: 'Silk and Stone',
      projectBeforeImage: 'before-after/after.png',
      projectAfterImage: 'before-after/before.jpg',
    },
    {
      projectYear: 'Project Year -2024',
      projectName: 'Zen Ridge',
      projectBeforeImage: 'before-after/after.png',
      projectAfterImage: 'before-after/before.jpg',
    },
  ];

  @ViewChildren('overlays') overlays!: QueryList<ElementRef>;
  @ViewChildren('sliders') sliders!: QueryList<ElementRef>;

  activeIndex: number | null = null;

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  onDragEnd() {
    this.activeIndex = null;
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDragMove(event: MouseEvent | TouchEvent) {
    if (this.activeIndex === null) return;

    const container = this.sliders.toArray()[this.activeIndex].nativeElement.parentElement;
    const overlay = this.overlays.toArray()[this.activeIndex].nativeElement;
    const slider = this.sliders.toArray()[this.activeIndex].nativeElement;

    const containerRect = container.getBoundingClientRect();
    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;

    let percentage = ((clientX - containerRect.left) / containerRect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    overlay.style.width = `${percentage}%`;
    slider.style.left = `${percentage}%`;
  }

  startDrag(event: MouseEvent | TouchEvent, index: number) {
    event.preventDefault();
    this.activeIndex = index;
  }

  ngAfterViewInit() {
    // Initialize positions to 50%
    this.overlays.forEach((overlay:any, i:any) => {
      overlay.nativeElement.style.width = '50%';
      this.sliders.toArray()[i].nativeElement.style.left = '50%';
    });
  }
}
