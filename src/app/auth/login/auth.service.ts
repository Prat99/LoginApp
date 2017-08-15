import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

export class User{
    username:string;
    password:string;
    constructor(username, password)
    {
        this.username= username;
        this.password= password;
       
    }
}
const users = [new User('admin', '123456'), new User('prat99','456789')];
@Injectable()
export class AuthService 
{
    constructor(private router:Router){}
    logout()
    {
      localStorage.removeItem('userval');
      this.router.navigate(['/login']);
    }
    login(user)
    {
       var authenticatedUser = users.find(u => u.username===user.username);
       if(authenticatedUser&&authenticatedUser.password===user.password)
       {
           localStorage.setItem("userval", authenticatedUser.toString());
           this.router.navigate(['/home']);
           return true;
       }
       return false;
    }
    checkCredentials()
    {
       if(localStorage.getItem("userval")===null)
       this.router.navigate(['/login']);
    }

}