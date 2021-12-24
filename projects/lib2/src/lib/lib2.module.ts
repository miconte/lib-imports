import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { Lib2Service } from './lib2.service';



@NgModule({
  declarations: [
    Lib2Component
  ],
  imports: [
  ],
  exports: [
    Lib2Component
  ],
  providers: [Lib2Service]
})
export class Lib2Module { }
