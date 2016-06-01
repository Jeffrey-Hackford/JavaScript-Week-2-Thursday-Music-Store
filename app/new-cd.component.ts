import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'new-cd',
  outputs: ['onSubmitNewCd'],
  template: `
  <div class="cd-form">
    <input placeholder="Title" class="col-sm-8 input-lg userIn" #newTitle>
    <input placeholder="Artist" class="col-sm-8 input-lg userIn" #newArtist>
    <input placeholder="Genera" class="col-sm-8 input-lg userIn" #newGenera>
    <button (click)="addCd(newTitle, newArtist, newGenera)" class="btn-lg add-button">Get</button>
  </div>
  `
})
export class NewCdComponent {
  public onSubmitNewCd: EventEmitter<Cd>;
  constructor(){
    this.onSubmitNewCd = new EventEmitter();
  }
  addCd(inputTitle: HTMLInputElement, inputArtist: HTMLInputElement, inputGenera: HTMLInputElement){
    // debugger;

    var newCd = new Cd(inputTitle.value, inputArtist.value, 0, 0, inputGenera.value);
    this.onSubmitNewCd.emit(newCd);
    inputTitle.value = "";
    inputArtist.value = "";
    inputGenera.value = "";

    var pattern="[a-zA-Z0-9].*$";
  }
}
