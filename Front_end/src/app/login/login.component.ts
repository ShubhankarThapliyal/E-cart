import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import{ServiceService} from '../service';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ng2-facebook-sdk';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServiceService]
})
export class LoginComponent implements OnInit {
  
  routes: any;
  user: any[];
  userObj:any;
  constructor(private service: ServiceService, private router:Router,private fb: FacebookService){

    fb.init({
    appId: '1856062044722303',
    version: 'v2.10'
  });
  }
  

  ngOnInit() {
  }

  setUserfb(res)
  {
this.userObj=res;
console.log(this.userObj, "setuserfb")

  }
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.fb.api('/me')
          .then((res: any) => {
            console.log('Got the users profile', res);
            
            this.setUserfb(res);
            // alert("Hello " + res.name);
            // console.log(this.userObj);
            // this.api.setUser(this.userObj);
            
            this.routes.navigate(['/Dashboard'])
          })
      })
      .catch(Error);
  }

  // login(mail:String, pass:String){
  //   this.service.getUser().subscribe(data=>{
  //     this.user=data;
  //     console.log(this.user);
  //     for(let i=0; i<this.user.length; i++){
  //       if(this.user[i].email== mail && this.user[i].password == pass){
  //         console.log('Success');
  //         this.router.navigate(['/dashboard']);
  //       }
  //       else{
  //         document.write('Try Again);')
  //       }
  //     }
  //   });
  // }
  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '{1593036874067717}',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : '{latest-api-version}'
  //   });
      
  //   FB.AppEvents.logPageView();   
      
  // };

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));
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

