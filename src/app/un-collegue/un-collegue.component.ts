import { Component, OnInit, Input } from "@angular/core";

import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";
import { error } from "util";
@Component({
  selector: "app-un-collegue",
  templateUrl: "./un-collegue.component.html",
  styleUrls: ["./un-collegue.component.css"]
})
export class UnCollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  constructor(private cService: CollegueService) {}

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    //$("score").click(increment);
    //  this.collegue.score += 10;
    this.cService
      .aimerUnCollegue(this.collegue)
      .then(collegueQuiDuBack => {
        console.log(collegueQuiDuBack);
        this.collegue = collegueQuiDuBack;
      })
      .catch(error => console.log(error));
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    //this.collegue.score -= 5;
    this.cService.detesterUnCollegue(this.collegue).then(collegue => {
      this.collegue = collegue;
    });
  }
  ngOnInit() {}
}
