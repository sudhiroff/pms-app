import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../../shared/end-point.service';
import { conf } from './config';
import { MatDialog } from '@angular/material';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  templateUrl: 'customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {  
  conf:any=conf
  cutomerList:Array<any>=[];
  displayedColumns=["projectName","companyName","siteContactPerName","siteMobileNo","action"];
  constructor(private endPointService:EndPointService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.endPointService.showCutomer()
    .subscribe((res:any)=>{
      this.cutomerList=res;
    });
  }

  public New_Click(){
      let dialogRef = this.dialog.open(AddCustomerComponent, {
        width: '800px',
        data: {
          // 'action': data['column'],
          // 'resId': data.row['resId']
        }
      });
      dialogRef.afterClosed().subscribe(res=>{
           this.ngOnInit();
      });
  }

  public actionDialog(action,row){
    if(action=="Update"){
      let dialogRef = this.dialog.open(AddCustomerComponent, {
        width: '800px',
        data: {
           'action': action,
           "row":row
        }
      });
      dialogRef.afterClosed().subscribe(res=>{
           this.ngOnInit();
      });
    }
    if(action=="Delete"){
        this.endPointService.removeCustomer(row['_id'])
        .subscribe((res:any)=>{
          this.ngOnInit();
      });
    }
  }

}