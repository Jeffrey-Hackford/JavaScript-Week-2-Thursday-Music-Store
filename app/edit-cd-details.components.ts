import {Component} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-cd-details',
  inputs: ['cd'],
  template: `
  <div class="cd-edit-form col-sm-8 input-lg userIn">
    <h3 class="edit-head">Edit Cost</h3>
    <input [(ngModel)]="cd.cost" class="col-sm-8 input-lg cd-edit-form" type="number" step=".01">
  </div>
`
})
export class EditCdDetailsComponent {
  public cd: Cd;
}
