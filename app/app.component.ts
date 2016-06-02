import { Component } from 'angular2/core';
import { CdListComponent } from './cd-list.component';
import { Cd } from './cd.model';

@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  templateUrl: 'app/urls/app.component.html'

})

export class AppComponent {
  public cds: Cd[];
  constructor(){
    this.cds = [
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0),
      new Cd("Word", "Here", "Music", "9.99", 0)
    ];
  }
  cdWasSelected(clickedCd: Cd): void{
    console.log('parent', clickedCd);
  }
}
