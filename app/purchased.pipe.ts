import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.model';


@Pipe({
  name: "purchased",
  pure: false
})
export class PurchasedPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var purchased = args[0];
    if(purchased === "purchased") {
      return input.filter((cd) => {
        return cd.purchased;
      });
    } else if (purchased === "notPurchased") {
      return input.filter((cd) => {
        return !cd.purchased;
      });
    } else {
      return input;
    }
  }
}
