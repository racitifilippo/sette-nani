import { Component } from '@angular/core';
import { Nano } from './nano/nano.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nani: Nano[] = []
  nNani: number = 7
  spanStyle: string = "span-style"

  constructor(){
    for(let i=0; i < this.nNani; i++){
      this.nani.push(new Nano(i))
    }
  }
}
