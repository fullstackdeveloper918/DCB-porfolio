import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

   projects = [
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2025/02/home15_projectpage.jpg',
      title: '',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2023/09/mega-home-13.jpg',
      title: 'HOME 14',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home13.jpg',
      title: '',
      badge: 'assets/images/badge-finalist.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home12.jpg',
      title: '',
      badge: 'assets/images/badge-winner.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home1.jpg',
      title: '',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home9.jpg',
      title: '',
      badge: '',
    },
  ];
}
