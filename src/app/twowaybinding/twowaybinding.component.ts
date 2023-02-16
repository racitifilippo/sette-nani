import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {

  stringa: string = 'Scrivi!!!!!'

  change(x: HTMLInputElement){
    this.stringa = x.value
  }

}
