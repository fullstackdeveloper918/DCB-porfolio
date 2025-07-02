import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { ContactInfo } from '../../../core/interfaces/contact.interface';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements OnInit, AfterViewInit {
    @ViewChild('leftScroll') leftScrollRef!: ElementRef;
  @ViewChild('rightScroll') rightScrollRef!: ElementRef;
  data! : ContactInfo
    contactForm!: FormGroup;

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.initForm();
    this.getContactUsData();
  }

  initForm(){
    this.contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    message: new FormControl('', [Validators.required]),
  });
  }

   ngAfterViewInit(): void {
  const left = this.leftScrollRef.nativeElement;
  const right = this.rightScrollRef.nativeElement;

  right.addEventListener(
    'wheel',
    (event: WheelEvent) => {
      const isLeftScrollable =
        left.scrollTop + left.clientHeight < left.scrollHeight;

      if (isLeftScrollable) {
        event.preventDefault();
        left.scrollTop += event.deltaY;
      }
      // If left is fully scrolled, do NOT prevent default
      // so rightScroll can naturally scroll
    },
    { passive: false }
  );
}


  getContactUsData() {
    this.authService.getContactUsData().subscribe((res: ContactInfo) => {
      if (res.status === 200) {
        this.data = res;
        console.log('Contact Us Data:', this.data);
      } else {
        console.error('Failed to fetch contact us data');
      }
    }, error => {
      console.error('Error fetching contact us data:', error);
    });
  }

  onSubmit(){
     if (this.contactForm.valid) {
      console.log('this.contc', this.contactForm.value)
      this.authService.postContactUs(this.contactForm.value).subscribe((res:any)=>{
        console.log('res', res)
      })
    } else {
      this.contactForm.markAllAsTouched(); 
    }
  }


}
