import {NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  imports: [NgFor],
  templateUrl: './mobile-sidebar.html',
  styleUrl: './mobile-sidebar.css'
})
export class MobileSidebar {
@Input() isOpen: boolean = false;
 @Output() close = new EventEmitter<void>();
 showMobileMenu: boolean = false
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Interiors', href: '#' },
    { label: 'Facts', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Client Login', href: '#' }
  ];

  onClose() {
    this.close.emit();
  }
  
}
