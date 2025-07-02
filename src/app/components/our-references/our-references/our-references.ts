import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OurReference } from '../../../core/services/our-reference';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { housreviwes, OurRefercneProjects, referencesData, videosData } from '../../../utils/Data';
import { Awards } from "../../about-us/awards/awards";
import { Router } from '@angular/router';

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
passwordForm! : FormGroup
isLogin : boolean = false


houseimages:any = housreviwes
projects :any 
= OurRefercneProjects
constructor(private referenceService : OurReference , private router : Router){}



ngOnInit() {
  this.checkforSession();
  this.getReferenceData();
  this.getRefrerenceProjects();
  this.initForm();

}

checkforSession(){
 const secureSession =  localStorage.getItem('secureSession')
 console.log('securesession', secureSession)
 if(secureSession){
 this.isLogin = true;
 console.log('is loing', this.isLogin)
 }
}


  onSubmit(){
    if(this.passwordForm.valid){
      this.referenceService.secureForm(this.passwordForm.value.password).subscribe(
        (res: any) => {
          if(res.status){
          const expiry = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem('secureSession', JSON.stringify({ expires: expiry }));
          this.checkforSession();
          }
        },
        (err) => {
          alert('Password is incorrect');
        }
      );
    }
  }


  initForm() {
  this.passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required])
  });
}


getReferenceData(){
  this.referenceService.getReferenceData().subscribe((res:any)=>{
    if(res.status == 200){
      this.data = res
      console.log('this.data', this.data)
    }
  });
}

getRefrerenceProjects(){
  this.referenceService.getReferenceProjects().subscribe(res =>{
    // this.projects = res
    console.log('res', res)
  })
}


scrollLeft() {
  this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}
