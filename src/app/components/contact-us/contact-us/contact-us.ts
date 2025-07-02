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

  // Scroll inside right panel
  right.addEventListener(
    'wheel',
    (event: WheelEvent) => {
      const isLeftScrollableDown =
        left.scrollTop + left.clientHeight < left.scrollHeight;
      const isLeftScrollableUp = left.scrollTop > 0;

      if (event.deltaY > 0 && isLeftScrollableDown) {
        // Scroll down: right → left
        event.preventDefault();
        left.scrollTop += event.deltaY;
      } else if (event.deltaY < 0 && isLeftScrollableUp && right.scrollTop === 0) {
        // Scroll up: right → left (when right is at top)
        event.preventDefault();
        left.scrollTop += event.deltaY;
      }
    },
    { passive: false }
  );

  // Scroll inside left panel
  left.addEventListener(
    'wheel',
    (event: WheelEvent) => {
      const isAtBottom =
        left.scrollTop + left.clientHeight >= left.scrollHeight && event.deltaY > 0;
      const isAtTop = left.scrollTop === 0 && event.deltaY < 0;

      if (isAtBottom || isAtTop) {
        event.preventDefault();
        right.scrollTop += event.deltaY;
      }
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
