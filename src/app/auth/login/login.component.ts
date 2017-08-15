import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 wrongCredentials:boolean;
 loginCredentials:{username:string,password:string} = {username:'', password:''};

  
  constructor(private router:Router, private auth:AuthService) { }
  
  ngOnInit() {
  }
  // validateUser(login)
  // {
  //   console.log('login Credentials '+login.username+" and password is "+login.password);
  //  if(login.username===this.ActualCredentials.username&&login.password===this.ActualCredentials.password)
  //  {
  //        this.wrongCredentials=false;
  //        this.router.navigate(['/home']);
  //  }
  //  else{
  //    this.wrongCredentials=true;
  //  }
  // }

   validateUser(login)
   {
     if(!this.auth.login(login))
     {
       this.wrongCredentials=true;
     }
   }
  
  

}
