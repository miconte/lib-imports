import { NgModule } from '@angular/core';
import { Lib1Component } from './lib1.component';
import { Lib1Service } from './lib1.service';



@NgModule({
  declarations: [
    Lib1Component
  ],
  imports: [
  ],
  exports: [
    Lib1Component
  ],
  providers: [Lib1Service]
})
export class Lib1Module { }
