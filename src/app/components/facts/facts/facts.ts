import { Component } from '@angular/core';
import { pageData } from '../../../utils/Data';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-facts',
  imports: [NgClass,NgIf,NgFor],
  templateUrl: './facts.html',
  styleUrl: './facts.css'
})
export class Facts {

  pageData : any = pageData

  isString(item: any): item is string {
  return typeof item === 'string';
}
}
