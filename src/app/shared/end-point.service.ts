import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  constructor(private http:HttpClient) { }

  public addCutomer(body:any){
     return this.http.post(environment.endpoint.Customer,body);
  }

  public updateCustomer(id:any,body:any){
    return this.http.put(environment.endpoint.Customer+"/"+id,body);
  }

  public removeCustomer(id:any){
    return this.http.delete(environment.endpoint.Customer+"/"+id);
  }

  public showCutomer(){
    return this.http.get(environment.endpoint.Customer);
  }

  //----------Item Rest API URLs-------------------//
  public addItem(body:any){
    return this.http.post(environment.endpoint.Item,body);
  }

  public updateItem(id:any,body:any){
    return this.http.put(environment.endpoint.Item+"/"+id,body);
  }

  public removeItem(id:any){
     return this.http.delete(environment.endpoint.Item+"/"+id);
  }

  public showItems(){
    return this.http.get(environment.endpoint.Item);
  }
  //----------------------END-------------------//
}
