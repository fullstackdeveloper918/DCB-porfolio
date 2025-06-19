import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { particularProjectImages } from '../../utils/Data';

@Component({
  selector: 'app-project',
  imports: [NgIf],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
 id: string | null = null;

  images = particularProjectImages

  currentIndex = 0;
  isDialogOpen = false;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
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
