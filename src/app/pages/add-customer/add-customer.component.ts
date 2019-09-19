import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ctrls } from './controls';
import { EndPointService } from '../../shared/end-point.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  loader: Boolean = false;
  form: FormGroup;
  formCtrl = ctrls;
  constructor(private fb: FormBuilder, private endPointService: EndPointService,
    public matSnackBar: MatSnackBar,private dialogRef:MatDialogRef<AddCustomerComponent>) { }

  ngOnInit() {
    this.form = this.fb.group(this.prepareForm(this.formCtrl));

    // this.formCtrl.forEach(element => {
    //   if(element.required){
    //     this.form.controls[element.name].setValidators(Validators.required);
    //   }
    // });
  }

  private prepareForm(list: any) {
    let formModel: any = {};
    list.forEach((item: any, i: any) => {
      if (item.required == true) {
        formModel[item.name] = ['',[Validators.required]];
      }
      else {
        formModel[item.name] = [''];
      }
    });
    return formModel;
  }

  get getCheckValidEmail() {
    debugger
    let ctrl = this.form.get('email')
    if (ctrl.errors && ctrl.errors.email) {
      return ctrl.invalid;
    }
  }

  private submit_Click() {    
    if (this.form.valid) {
      this.loader = true;
      this.endPointService.addCutomer(this.form.value)
        .subscribe(res => {
          this.loader = false;
          this.matSnackBar.open('Record Saved Successfully. !', '', { duration: 3000 });
          this.dialogRef.close();
          for(var name in this.form.controls) {
            this.form.controls[name].reset();
          }
        });
    }
  }

}
