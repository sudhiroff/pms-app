import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../../shared/end-point.service';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { conf } from './config';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  conf:any=conf
  itemList:Array<any>=[];
  displayedColumns=["itemName","itemCategory","brandName","unitByPrice","action"];
  constructor(private endPointService:EndPointService,private dialog: MatDialog) { }

  ngOnInit() {
    this.endPointService.showItems()
    .subscribe((res:any)=>{
      this.itemList=res;
    });
  }

  public New_Click(){
    let dialogRef = this.dialog.open(AddItemComponent, {
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
    let dialogRef = this.dialog.open(AddItemComponent, {
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
      this.endPointService.removeItem(row['_id'])
      .subscribe((res:any)=>{
        this.ngOnInit();
    });
  }
}

}
