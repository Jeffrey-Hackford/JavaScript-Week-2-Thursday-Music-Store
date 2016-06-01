import {Component} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['cd'],
  template: `
    <h3>Edit cost: {{ cd.cost }}</h3>
`
})
export class EditCdDetailsComponent {
  public cd: Cd;
}
