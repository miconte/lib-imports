import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lib1Service {

  constructor() { }

  log(){
    console.log("LIB 1 LOGGER")
  }
}
