import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-references',
  imports: [],
  templateUrl: './our-references.html',
  styleUrl: './our-references.css'
})
export class OurReferences {
@ViewChild('slider', { static: false }) slider!: ElementRef;

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

scrollLeft() {
  this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}
