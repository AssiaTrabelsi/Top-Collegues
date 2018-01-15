import { Component, OnInit, Input } from "@angular/core";

import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";
import { VoteService } from "../shared/service/vote.service";
import { error } from "util";
@Component({
  selector: "app-un-collegue",
  templateUrl: "./un-collegue.component.html",
  styleUrls: ["./un-collegue.component.css"]
})
export class UnCollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  isOnline: boolean = false;
  constructor(
    private cService: CollegueService,
    private voteService: VoteService
  ) {}
  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    //$("score").click(increment);
    //  this.collegue.score += 10;
    this.voteService
      .aimerUnCollegue(this.collegue)
      .subscribe(collegueQuiDuBack => {
        console.log(collegueQuiDuBack);
        this.collegue = collegueQuiDuBack;
      });
    //.catch(error => console.log(error));
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    //this.collegue.score -= 5;
    this.voteService.detesterUnCollegue(this.collegue).subscribe(collegue => {
      this.collegue = collegue;
    });
  }
  ngOnInit() {
    this.cService.status.subscribe(online => {
      this.isOnline = online;
    });
  }
}
