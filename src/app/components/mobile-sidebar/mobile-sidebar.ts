import {NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-sidebar',
  imports: [NgFor, RouterLink],
  templateUrl: './mobile-sidebar.html',
  styleUrl: './mobile-sidebar.css'
})
export class MobileSidebar {
  @Input() isOpen: boolean = false;
 @Output() close = new EventEmitter<void>();
 showMobileMenu: boolean = false
  navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-dcb' },
  { label: 'Projects', href: '/projects' },
  { label: 'Interiors', href: 'https://dcbinteriors.com.au/' },
  { label: 'Facts', href: '/facts' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Client Login', href: '/client-login' }
];

  onClose() {
    this.close.emit();
  }
  
}
