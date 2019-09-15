import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../../shared/end-point.service';
import { conf } from './config';

@Component({
  templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {  
  conf:any=conf
  cutomerList:Array<any>=[];
  constructor(private endPointService:EndPointService) { }

  ngOnInit(): void {
    this.endPointService.showCutomer()
    .subscribe((res:any)=>{
      this.cutomerList=res;
    });
  }

}