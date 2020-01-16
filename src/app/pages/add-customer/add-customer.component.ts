import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ctrls } from './controls';
import { EndPointService } from '../../shared/end-point.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  loader: Boolean = false;
  form: FormGroup;
  formCtrl = ctrls;
  action=null;
  row=null;
  constructor(private fb: FormBuilder, private endPointService: EndPointService, @Inject(MAT_DIALOG_DATA) public data: any,
    public matSnackBar: MatSnackBar,private dialogRef:MatDialogRef<AddCustomerComponent>) { }

  ngOnInit() {
    this.action=this.data['action'];
    this.row=this.data['row'];
    this.form = this.fb.group(this.prepareForm(this.formCtrl));
    if(this.action=="Update"){
      for(var name in this.form.controls) {
        this.form.controls[name].setValue(this.row[name]);
      }
    }
  }

  private prepareForm(list: any) {
    let formModel: any = {};
    // list.forEach((item: any, i: any) => {
    //   formModel[item.name] = ['',item.validator];
    // });
    formModel['projectName']=['',Validators.required];
    formModel['companyName']=['',Validators.required];
    formModel['natureBusiness']=['',Validators.required];
    formModel['gstNo']=[''];
    formModel['remark']=[''];
    formModel['siteContactPerName']=['',Validators.required];
    formModel['siteMobileNo']=['',[Validators.required,Validators.pattern("^[0-9]*$")]];
    formModel['siteEmailId']=['',Validators.email];
    formModel['officeContactPerName']=['',Validators.required];
    formModel['officeMobileNo']=['',[Validators.required,Validators.pattern("^[0-9]*$")]];
    formModel['officeEmailId']=['',Validators.email];
    return formModel;
  }

  private submit_Click() {    
    if (this.form.valid) {
      this.loader = true;
      if(this.action=="Update"){
        this.endPointService.updateCustomer(this.row['_id'],this.form.value)
        .subscribe(res => {
          this.upadteCtrl();
        });
      }else{
        this.endPointService.addCutomer(this.form.value)
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
