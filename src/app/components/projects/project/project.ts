import { NgIf } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { particularProjectImages } from '../../../utils/Data';
import { slideInUp, zoomIn } from '../../../utils/common-functions';

@Component({
  selector: 'app-project',
  imports: [NgIf],
  templateUrl: './project.html',
  styleUrl: './project.css',
  animations : [zoomIn, slideInUp]
})
export class Project {
 id: string | null = null;

  images = particularProjectImages.map(img => ({ ...img, visible: false }))

  currentIndex = 0;
  isDialogOpen = false;

    @ViewChildren('imgBox', { read: ElementRef }) imgBoxes!: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dataIndex = entry.target.getAttribute('data-index');
          if (dataIndex !== null) {
            const index = +dataIndex;
            if (entry.isIntersecting) {
              this.images[index].visible = true;
              observer.unobserve(entry.target); // only once
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    this.imgBoxes.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }

  openDialog(index: number) {
    this.currentIndex = index;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
