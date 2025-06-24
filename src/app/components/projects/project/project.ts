import { NgClass, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { particularProjectImages } from '../../../utils/Data';
import { slideInUp, zoomIn } from '../../../utils/common-functions';
import { ProjectService } from '../../../core/services/project';

@Component({
  selector: 'app-project',
  imports: [NgIf, NgClass],
  templateUrl: './project.html',
  styleUrl: './project.css',
  animations : [zoomIn, slideInUp]
})
export class Project implements OnInit {
 id: string | null = null;

  images :any
  heroImage!: string

  currentIndex = 0;
  isDialogOpen = false;

  @ViewChildren('imgBox', { read: ElementRef }) imgBoxes!: QueryList<ElementRef>;

  constructor(
  private route: ActivatedRoute,
  private projectService: ProjectService) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.projectService.getProjectById(this.id).subscribe((res:any) => {
      this.heroImage = res.project.gallery[0];
      if(res.status === 200) {
      this.images = res.project.gallery.slice(1).map((img: string) => ({
      url: img,
      visible: false
    }));
        setTimeout(() => this.observeImages(), 0);
      } 
    });
  }


  observeImages() {
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

  // Wait for view to render the image boxes
  setTimeout(() => {
    this.imgBoxes.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  });
}



  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const dataIndex = entry.target.getAttribute('data-index');
  //         if (dataIndex !== null) {
  //           const index = +dataIndex;
  //           if (entry.isIntersecting) {
  //             this.images[index].visible = true;
  //             observer.unobserve(entry.target); // only once
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   this.imgBoxes.forEach((el) => {
  //     observer.observe(el.nativeElement);
  //   });
  // }

getImageBoxClass(index: number): string {
  const patternIndex = index % 6;

  if (patternIndex === 1 || patternIndex === 2) {
    return 'col-span-2'; // Full width in a 2-col grid
  }

  return 'col-span-1'; // Half width
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
