import { Injectable } from '@angular/core';
import { Lib1Service } from 'lib1';

@Injectable({
  providedIn: 'root'
})
export class Lib2Service {

  constructor(private l1: Lib1Service) { }

  log(){
    this.l1.log();
  }
}
