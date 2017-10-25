import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FacebookService, InitParams } from 'ngx-facebook';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
  public users;

  constructor(private http: Http, private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
  }

  postUserDetails(firstname: String, lastname:String, dob: Date, phone:String, email:String, pwd: String, address:String,pin:String){
    return this.http.post('http://localhost:3000/tasks',{firstname:firstname, lastname:lastname, Date_of_birth:dob, phone_number:phone, email:email, password:pwd, address:address, pincode:pin})
    .subscribe(res => console.log(res));
  }
  getUser(){
    return this.http.get('http://localhost:3000/tasks').map((res:Response) => res.json());
  }
  // loginUser(){
  //   return this.http.post('http://localhost:3000/tasks'),{email:mail, password:pass}
  // }
}  
      