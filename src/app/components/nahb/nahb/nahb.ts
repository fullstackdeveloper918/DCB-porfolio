import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nahb',
  imports: [],
  templateUrl: './nahb.html',
  styleUrl: './nahb.css'
})
export class Nahb {
 routeBasedContent: SafeHtml | null = null;
  routeBasedImage:string = ''
  routeBasedTitle!: string

  constructor(private router : Router, private sanitizer : DomSanitizer){}

  ngOnInit(): void {
  this.routeBasedContentAndImage();
  }

  routeBasedContentAndImage() {
  const currentRoute = this.router.url;
  if (currentRoute === '/20-clubs') {
    const content = `
      <div class="text-sm text-gray-800 space-y-2 leading-relaxed">
        <p>Please enjoy browsing our fellow Builder 20 Club members websites below:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Shaeffer Hyde Construction – Colorado</li>
          <li>Cataldo Builders – E. Falmouth, MA.</li>
          <li>Cabin John Builders – Cabin John, MD.</li>
          <li>Matt Sitra Homes – Austin, TX.</li>
          <li>The Troxel Company – Holland, MI.</li>
          <li>Providence Homes Inc – Arlington, TX.</li>
          <li>Augusta Homes – Cornelius, NC.</li>
          <li>Home Source Builders – Asheville, NC.</li>
          <li>Baud Builders – Wakefield, RI</li>
          <li>Ed Nikles – Milfford PA.</li>
          <li>Raykon Constructions - Salem, UT</li>
          <li>Denman Construction – Whitefish, MT.</li>
          <li>Buffington Homes – Johns Island, SC.</li>
          <li>TM Grady Builders – Luguna, CA.</li>
          <li>Hardwick GC – Maitland, FL.</li>
          <li>G Little – Port Townsend, WA.</li>
          <li>Olsen Custom Homes – Daytona Beach, FL.</li>
          <li>Ellis Custom Homes – College Station, TX.</li>
          <li>Schneider Construction – Norfolk, VA.</li>
          <li>Split Rock Custom Homes - St. George, UT</li>
        </ul>
        <div class="flex justify-center">
        <img src="https://www.dcb.com.au/wp-content/uploads/2017/09/nahb.png"/>
        </div>
      </div>
    `;
    this.routeBasedTitle = '20 Clubs';
    this.routeBasedContent = this.sanitizer.bypassSecurityTrustHtml(content);
    this.routeBasedImage = 'https://www.dcb.com.au/wp-content/uploads/2020/05/nahb_img_1.jpg';
  }
}


}
