import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-before-you-build',
  imports: [],
  templateUrl: './before-you-build.html',
  styleUrl: './before-you-build.css'
})
export class BeforeYouBuild implements OnInit, AfterViewInit{
  @ViewChildren('textSection') textSections!: QueryList<ElementRef>;
  routeBasedContent: SafeHtml | null = null;
  routeBasedImage:string = ''
  routeBasedTitle!: string

  constructor(private router : Router, private sanitizer : DomSanitizer){}

  ngOnInit(): void {
  this.routeBasedContentAndImage();
  }

  routeBasedContentAndImage(){
    const currentRoute = this.router.url;
    if(currentRoute === '/before-you-build'){
        const content = `
        <div class="text-sm text-gray-800 space-y-4 leading-relaxed">
          <p>
            All building work these days is not cheap, so if you’re looking for cheap, we are probably not the right fit.
            Our goal is to provide <strong>quality</strong> and <strong>value</strong> to those who seek the same.
          </p>

          <p>
            <a href="#" class="text-blue-600 underline font-medium">Home Owners Warranty Insurance</a> (HOW) is needed for any residential project over the value of $20,000.00.
          </p>

          <p>
            The majority of building works need council approval before work can commence. This can be done in the way of a DA or a CDC:
          </p>

          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>DA, A Development Application</strong> is commonly referred to as a DA. It is a formal request to carry out proposed development, such as change of use of land, subdivide land, and carry out building, landscaping and other work.
            </li>
            <li>
              <strong>CDC, <a href="#" class="text-blue-600 underline">Complying Development</a></strong> Certificate is a fast-track approval process for straightforward residential, commercial and industrial development.
            </li>
            <li>
              <strong>Architectural Drawings</strong>, Site Survey will be required to obtain DA or CDC approval.
            </li>
          </ul>

          <p>
            Bushfire reports will be needed if you are located in a bushfire zone.
          </p>
        </div>
      `;
      this.routeBasedTitle = 'Before You Build'
      this.routeBasedContent = this.sanitizer.bypassSecurityTrustHtml(content);
      this.routeBasedImage = 'https://www.dcb.com.au/wp-content/uploads/2020/09/Proj_3_bg.jpg'
    }
  }

  ngAfterViewInit(): void {
     this.textSections.forEach(section => {
    const lines = section.nativeElement.querySelectorAll('.reveal-line');

    lines.forEach((line: HTMLElement) => {
   
      const words = line.textContent?.trim().split(' ') || [];
      line.innerHTML = ''; 

      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.innerHTML = word + '&nbsp;';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.overflow = 'hidden';
        line.appendChild(wordSpan);
      });

      const wordSpans = line.querySelectorAll('span');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      tl.from(wordSpans, {
        y: 50,
        opacity: 0.4,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.01,
        height:0,
      });
    });
  });
}

    
}
