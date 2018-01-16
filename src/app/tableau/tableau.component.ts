import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";
import { VoteService } from "../shared/service/vote.service";

@Component({
  selector: "app-tableau",
  templateUrl: "./tableau.component.html",
  styleUrls: ["./tableau.component.css"]
})
export class TableauComponent implements OnInit {
  collegues: Collegue[] = [];
  constructor(
    private cService: CollegueService,
    private voteService: VoteService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cService.listerCollegues().subscribe(colleguesQuiVientDuBack => {
      this.collegues = colleguesQuiVientDuBack;
    });
  }

  jaime(collegue) {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    //$("score").click(increment);
    //  this.collegue.score += 10;
    this.voteService.aimerUnCollegue(collegue).subscribe(collegueQuiDuBack => {
      console.log(collegueQuiDuBack);
      this.collegues.filter(
        c => c.pseudo == collegueQuiDuBack.pseudo
      )[0].score =
        collegueQuiDuBack.score;
      /*this.collegues = this.collegues.map(c => {
        return c.pseudo == collegue.pseudo ? collegueQuiDuBack : c;
      });*/
    });
    //.catch(error => console.log(error));
  }
  jedeteste(collegue) {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    //this.collegue.score -= 5;
    this.voteService
      .detesterUnCollegue(collegue)
      .subscribe(collegueQuiDuBack => {
        console.log(collegueQuiDuBack);
        this.collegues.filter(
          c => c.pseudo == collegueQuiDuBack.pseudo
        )[0].score =
          collegueQuiDuBack.score;
        /*this.collegues = this.collegues.map(c => {
          return c.pseudo == collegue.pseudo ? collegueQuiDuBack : c;
        });*/
      });
    // .catch(error => console.log(error));
  }
}
