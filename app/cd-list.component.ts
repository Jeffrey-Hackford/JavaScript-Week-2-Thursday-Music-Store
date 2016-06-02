import { Component, EventEmitter } from 'angular2/core';
import { EditCdDetailsComponent } from './edit-cd-details.components';
import { CdComponent } from './cd.component';
import { NewCdComponent } from './new-cd.component';
import { Cd } from './cd.model';
import { PurchasedPipe } from './purchased.pipe';
import { totalPrice } from './cd.component';
console.log("test", totalPrice);
var finalPrice = 0;

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  pipes: [PurchasedPipe],
  outputs: ['onCdSelect'],
  directives: [CdComponent, EditCdDetailsComponent, NewCdComponent],
  templateUrl: 'app/urls/cd-list.component.html'
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  public filterPurchased: "notPurchased";
  constructor() {
    this.onCdSelect = new EventEmitter();
  }

  cdClicked(clickedCd: Cd): void {
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }

  createCd(cd: Cd): void {
    cd.id = this.cdList.length;
    this.cdList.push(cd);
  }

  onChange(filterOption) {
    this.filterPurchased = filterOption;

    for(var i = 0; i < totalPrice.length; i++) {
      finalPrice += parseFloat(totalPrice[i]);
      console.log("finalPrice = ", finalPrice);
    }
  }
}
