import { Component } from 'angular2/core';
import { Cd } from './cd.model';

@Component ({
  selector: 'cd-display',
  inputs: ['cd'],
  templateUrl:'app/urls/cd.component.html'
})

export class CdComponent {
  public cd: Cd;
}
