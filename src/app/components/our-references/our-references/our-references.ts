import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-our-references',
  imports: [ReactiveFormsModule],
  templateUrl: './our-references.html',
  styleUrl: './our-references.css'
})
export class OurReferences {
@ViewChild('slider', { static: false }) slider!: ElementRef;
passwordForm! : FormGroup;
showForm : boolean = true;

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

ngOnInit() {
  this.initForm();
  this.checkPassword();
}

initForm() {
  this.passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

checkPassword() {
  const storedPassword = localStorage.getItem('password');
  if(storedPassword) {
    this.showForm = false;
  }
}

onSubmit(){
   localStorage.setItem('password', JSON.parse(this.passwordForm.value.password));
   this.passwordForm.reset();
   this.checkPassword();
}

scrollLeft() {
  this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}
