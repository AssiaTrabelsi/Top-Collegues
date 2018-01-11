import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "score"
})
export class ScorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value > 0) {
      return `+${value}`;
    }
    return value;
  }
}
