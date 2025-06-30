import { Component } from "@angular/core";
import { awardImages } from "../../../utils/Data";

@Component({
  selector: 'app-awards',
  standalone: true,
  template: `
      <div class="md:flex flex-wrap justify-center items-center gap-0 grid grid-cols-3 px-4 xl:px-10 gap-3">
    @for(image of awardImages;track image){
      <img [src]='image.imageLink' alt="Award 1"
      class="h-full md:h-35" />}
    <!-- Add the rest similarly -->
  </div>
  `
})
export class Awards {
  awardImages = awardImages;
}
