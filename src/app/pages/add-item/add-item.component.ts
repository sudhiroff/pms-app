import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { EndPointService } from '../../shared/end-point.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  loader: Boolean = false;
  form: FormGroup;
  action=null;
  row=null;
  constructor(private fb: FormBuilder, private endPointService: EndPointService, @Inject(MAT_DIALOG_DATA) public data: any,
  public matSnackBar: MatSnackBar,private dialogRef:MatDialogRef<AddItemComponent>) { }

  ngOnInit() {
    this.action=this.data['action'];
    this.row=this.data['row'];
    this.form = this.fb.group(this.prepareForm());
    if(this.action=="Update"){
      for(var name in this.form.controls) {
        this.form.controls[name].setValue(this.row[name]);
      }
    }
  }

  private prepareForm() {
    let formModel: any = {};
    formModel['itemName']=['',Validators.required];
    formModel['itemCategory']=['',Validators.required];
    formModel['otherCategory']=[''];
    formModel['brandName']=[''];
    formModel['unit']=[''];
    formModel['unitByPrice']=[''];
    formModel['storageRemark']=[''];
    formModel['remark']=[''];
    return formModel;
  }

  private submit_Click() { 
    if (this.form.valid) {
      this.loader = true;
      if(this.action=="Update"){
        this.endPointService.updateItem(this.row['_id'],this.form.value)
        .subscribe(res => {
          this.upadteCtrl();
        });
      }else{
        this.endPointService.addItem(this.form.value)
        .subscribe(res => {
          this.upadteCtrl();
        });
      }
     
    }
  }

  private upadteCtrl() {
    this.loader = false;
    this.matSnackBar.open('Record Saved Successfully. !', '', { duration: 3000 });
    this.dialogRef.close();
    for (var name in this.form.controls) {
      this.form.controls[name].reset();
    }
  }

}
