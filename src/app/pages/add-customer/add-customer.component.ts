import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ctrls } from './controls';
import { EndPointService } from '../../shared/end-point.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  loader: Boolean = false;
  form: FormGroup;
  formCtrl = ctrls;
  constructor(private fb: FormBuilder, private endPointService: EndPointService) { }

  ngOnInit() {
    this.form = this.fb.group(this.prepareForm(this.formCtrl));
  }

  private prepareForm(list: any) {
    let formModel: any = {};
    list.forEach((item: any, i: any) => {
      formModel[item.name] = [''];
    });
    return formModel;
  }

  private submit_Click() {    
    debugger;
    if (this.form.valid) {
      this.loader = true;
      this.endPointService.addCutomer(this.form.value)
        .subscribe(res => {
          this.loader = false;
        });
    }
  }

}
