import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  title = "Item ++";
  quant = 0;

  @Input() description: String;


  add() {
    this.quant++;
  }


}
