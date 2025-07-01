import { Component, OnInit } from '@angular/core';
import { pageData } from '../../../utils/Data';
import { FactsService } from '../../../core/services/facts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facts',
  imports: [RouterLink],
  templateUrl: './facts.html',
  styleUrl: './facts.css'
})
export class Facts implements OnInit {

  constructor(private factsService : FactsService){}

  ngOnInit(): void {
    this.getFactsData();
    throw new Error('Method not implemented.');
  }

  getFactsData(){
   this.factsService.getFactsData().subscribe((res:any)=>{
    console.log('data', res)
   })
  }

  pageData : any = pageData

  isString(item: any): item is string {
  return typeof item === 'string';
}
}
