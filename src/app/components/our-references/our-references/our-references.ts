import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OurReference } from '../../../core/services/our-reference';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { housreviwes, OurRefercneProjects, referencesData, videosData } from '../../../utils/Data';
import { Awards } from "../../about-us/awards/awards";

@Component({
  selector: 'app-our-references',
  imports: [ReactiveFormsModule, NgFor, NgIf, NgClass, Awards],
  templateUrl: './our-references.html',
  styleUrl: './our-references.css'
})
export class OurReferences {
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
