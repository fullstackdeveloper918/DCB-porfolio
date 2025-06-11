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
      title: 'Home 12',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2023/09/mega-home-13.jpg',
      title: 'HOME 11',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home13.jpg',
      title: 'Home 10',
      badge: 'assets/images/badge-finalist.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home12.jpg',
      title: 'Home 9',
      badge: 'assets/images/badge-winner.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home7.jpg',
      title: 'Home 8',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/project_10_cover.jpg',
      title: 'Home 7',
      badge: '',
    },
     {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/mega_proj_5.jpg',
      title: 'Home 6',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2023/09/mega-home-4.jpg',
      title: 'Home 5',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/10/mega_proj_6.jpg',
      title: 'Home 4',
      badge: 'assets/images/badge-finalist.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2024/06/homecover-home12.jpg',
      title: 'Home 3',
      badge: 'assets/images/badge-winner.png',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/05/mega_proj_2.jpg',
      title: 'Home 2',
      badge: '',
    },
    {
      image: 'https://www.dcb.com.au/wp-content/uploads/2020/05/project_4_megamenu.jpg',
      title: 'Home 1',
      badge: '',
    },
  ];
}
