import { Component, EventEmitter } from 'angular2/core';
import { EditCdDetailsComponent } from './edit-cd-details.components';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';


@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  directives: [CdComponent, EditCdDetailsComponent],
  templateUrl: 'app/urls/cd-list.component.html'
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  constructor() {
    this.onCdSelect = new EventEmitter();
  }

  cdClicked(clickedCd: Cd): void{
    console.log('child', clickedCd);
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
}
