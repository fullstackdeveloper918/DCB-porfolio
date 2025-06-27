import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OurReference } from '../../../core/services/our-reference';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { housreviwes, OurRefercneProjects } from '../../../utils/Data';

@Component({
  selector: 'app-our-references',
  imports: [ReactiveFormsModule, NgFor, NgIf, NgClass],
  templateUrl: './our-references.html',
  styleUrl: './our-references.css'
})
export class OurReferences {
@ViewChild('slider', { static: false }) slider!: ElementRef;
data:any
selectedCategory = 'RESIDENTIAL';
constructor(private referenceService : OurReference){}

houseimages:any = housreviwes

imageList = [
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',
  'https://www.dcb.com.au/wp-content/uploads/2020/05/megamenu_facts.jpg',

  // Add more image URLs
];

projects :any = OurRefercneProjects


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
