import { Component } from 'angular2/core';
import { Cd } from './cd.model';
export var totalPrice: string[] = [];

@Component ({
  selector: 'cd-display',
  inputs: ['cd'],
  templateUrl:'app/urls/cd.component.html'
})

export class CdComponent {
  public cd: Cd;
  togglePurchased(setState: boolean){
    this.cd.purchased = setState;
    if(setState == true){
      totalPrice.push(this.cd.cost);
      console.log(totalPrice);
    } else if (setState == false) {
      totalPrice.pop();
      console.log(totalPrice);
    } else {
      return "How did you get here!!??";
    }
  }
}
