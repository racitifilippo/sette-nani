import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Nano } from './nano.model';

@Component({
  selector: 'app-nano',
  templateUrl: './nano.component.html',
  styleUrls: ['./nano.component.css']
})
export class NanoComponent {
  @Input() nano: Nano | undefined
  classeNano: string = "div-nano-white"

  changeMode(){
    if(this.classeNano == "div-nano-white"){
      this.classeNano = "div-nano-black"
    }else{
      this.classeNano = "div-nano-white"

    }
  }

}
