import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.model';
var purchased = [];


@Pipe ({
  name: "purchased",
  pure: false
})

export class PurchasedPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var bought = args[0];
    if(bought === "purchased") {
      return input.filter(function(cd) {
        purchased.push(input);
        console.log(purchased);
      });
    } else if (bought === "notPurchased") {
      return input.filter(function(cd) {
        return cd.purchased
      });
    } else {
      return input;
    }
  }
}
