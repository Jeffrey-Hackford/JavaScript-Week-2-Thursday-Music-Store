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
      new Cd("Word", "Here", 3.99, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music"),
      new Cd("Word", "Here", 3.00, 0, "Music")
    ];
  }
  cdWasSelected(clickedCd: Cd): void{
    console.log('parent', clickedCd);
  }
}
