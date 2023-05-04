import { Component, OnInit } from '@angular/core';
import { ServicedataService } from '../service/servicedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 accno:any
 pword:any

constructor(private ds:ServicedataService) { }

ngOnInit():void{}

login( ){
  // alert(accno)
alert(`${this.ds.checkdata()} ${this.ds.sdata}`)

}

}
