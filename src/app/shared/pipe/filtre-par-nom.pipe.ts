import { Pipe, PipeTransform } from "@angular/core";
import { Collegue } from "../domain/collegue";

@Pipe({
  name: "filtreParNom"
})
export class FiltreParNomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args) {
      return value.filter(collegue =>
        collegue.pseudo.toLowerCase().startsWith(args.trim().toLowerCase())
      );
    }
    return value;
  }
