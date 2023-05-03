import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data="you are awsome you can do it "
pdata="property binding"

constructor() { }

ngOnInit():void{}

login(){
  alert("login clicked")
}

unamechange(event:any){
  console.log(event.target.value);
  
}
}
