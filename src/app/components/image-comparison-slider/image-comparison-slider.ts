import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Home } from '../../core/services/home';
import { Project, ProjectResponse } from '../../core/interfaces/home.interface';

@Component({
  selector: 'app-image-comparison-slider',
  imports: [],
  templateUrl: './image-comparison-slider.html',
  styleUrl: './image-comparison-slider.css'
})
export class ImageComparisonSlider implements OnInit, AfterViewInit {

  @ViewChildren('overlays') overlays!: QueryList<ElementRef>;
  @ViewChildren('sliders') sliders!: QueryList<ElementRef>;

  activeIndex: number | null = null;
  content!: Project[];
  constructor(private homeService : Home){}

  ngOnInit(): void {
    this.getBeforeAfterContent()
  }

  getBeforeAfterContent(){
    this.homeService.getBeforeAfterContent().subscribe((res:ProjectResponse) =>{
      this.content = res.projects
      console.log('before after', res)
    })
  }


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
