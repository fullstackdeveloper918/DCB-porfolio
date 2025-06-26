import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { ContactInfo } from '../../../core/interfaces/contact.interface';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements OnInit {

  data! : ContactInfo

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.getContactUsData();
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


}
