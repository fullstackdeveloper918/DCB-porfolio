import { Component, ElementRef, ViewChild } from '@angular/core';
import { OurReference } from '../../../core/services/our-reference';
import { referencesData, videosData, housreviwes, OurRefercneProjects } from '../../../utils/Data';
import { Awards } from '../../about-us/awards/awards';
import {NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-reference-1',
  imports: [ReactiveFormsModule, NgClass, Awards, RouterLink],
  templateUrl: './our-reference-1.html',
  styleUrl: './our-reference-1.css'
})
export class OurReference1 {
@ViewChild('slider', { static: false }) slider!: ElementRef;
data:any
selectedCategory = 'RESIDENTIAL';
referencesData = referencesData;
videosData = videosData;

houseimages:any = housreviwes
projects :any = OurRefercneProjects
constructor(private referenceService : OurReference){}



ngOnInit() {
  this.getReferenceData();
}



getReferenceData(){
  this.referenceService.getReferenceData().subscribe((res:any)=>{
    if(res.status == 200){
      this.data = res
      console.log('this.data', this.data)
    }
  });
}


scrollLeft() {
  this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}
