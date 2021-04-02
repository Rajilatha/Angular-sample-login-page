import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
 email:any;
 password:any;

 loginUser(){
   if(this.email== "admin@gmail.com" && this.password== "Admin"){
     alert("Welcome to our Page")
   }
   else{
     alert("Please check Your details.")
   }
 }
}
