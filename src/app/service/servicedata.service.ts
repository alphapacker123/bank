import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {


  sdata="hi lander"
  constructor() { }

  checkdata(){return"hello hi"}
}
