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

  public showCutomer(){
    return this.http.get(environment.endpoint.Customer);
 }
}
