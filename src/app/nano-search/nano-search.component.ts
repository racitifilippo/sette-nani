import { Component } from '@angular/core';
import { Nano } from '../nano/nano.model';

@Component({
  selector: 'app-nano-search',
  templateUrl: './nano-search.component.html',
  styleUrls: ['./nano-search.component.css']
})
export class NanoSearchComponent {
  nanoSearch: string = ''
  

  search(id: number){
    console.log('adfsfsdfsdjfsdhfsjkdfhsdfjksd')
    let nano = new Nano(id)
    console.log(id)
    this.nanoSearch = nano.nome
  }

}
