import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import{ServiceService} from '../service';
import { FacebookService, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServiceService]
})
export class LoginComponent implements OnInit {
  user: any[];

  constructor(private service: ServiceService, private router:Router, private fb: FacebookService){}
  

  ngOnInit() {
  }
  login(mail:String, pass:String){
    this.service.getUser().subscribe(data=>{
      this.user=data;
      console.log(this.user);
      for(let i=0; i<this.user.length; i++){
        if(this.user[i].email== mail && this.user[i].password == pass){
          console.log('Success');
          this.router.navigate(['/dashboard']);
        }
        else{
          document.write('Try Again);')
        }
      }
    });
  }
  // loginWithFacebook(): void {
  //   this.fb.login().then((response: LoginResponse) => console.log(response)).catch((error: any) => console.error(error));
  // }
}

  // data={
  //   username:'',
  //   password:''
  // }
  // formsubmit(){
  //   var valmail = localStorage.getItem("mail");
  //   var valpass = localStorage.getItem("pass");
  //   console.log(this.data);
  //   if(this.data.username == JSON.parse(valmail) && this.data.password == JSON.parse(valpass)){
  //     this.router.navigate(['dashboard']);
  //     console.log('welcome');
  //   }
  //   else{
  //     console.log('incorrect password');
  //     alert('Incorrect Password');
  //   }
  // }

