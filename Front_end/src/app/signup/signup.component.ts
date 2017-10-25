import { Component, OnInit } from '@angular/core';
import { ServiceService }from '../service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }
  //onSubmit(usermail,userpass){
    postDetails(firstname:String, lastname:String, dob: Date, phone:String, email:String,pwd:String,address:String,pin:String){
      this.service.postUserDetails(firstname, lastname, dob, phone, email, pwd, address, pin);
   }
    // localStorage.setItem("firstname",JSON.stringify(userfirstname));
    // localStorage.setItem("lastname",JSON.stringify(userlastname));
    // localStorage.setItem("dob",JSON.stringify(userdob));
    // localStorage.setItem("phone",JSON.stringify(userphone));
    // localStorage.setItem("mail",JSON.stringify(usermail));
    // localStorage.setItem("pass",JSON.stringify(userpass));
    // localStorage.setItem("add",JSON.stringify(useraddress));
    // localStorage.setItem("pin",JSON.stringify(userpin));
    //console.log();
  //}

}
