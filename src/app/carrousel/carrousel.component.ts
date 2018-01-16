import { Component, OnInit } from "@angular/core";
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { VoteService } from "../shared/service/vote.service";
@Component({
  selector: "app-carrousel",
  templateUrl: "./carrousel.component.html",
  styleUrls: ["./carrousel.component.css"],
  providers: [NgbCarouselConfig]
})
export class CarrouselComponent implements OnInit {
  collegues: Collegue[] = [];
  constructor(
    private voteService: VoteService,
    private cService: CollegueService,
    config: NgbCarouselConfig
  ) {
    //config.interval = 10000;
    // config.wrap = true;
    //config.keyboard = false;
  }

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
      this.collegues = this.collegues.map(c => {
        return c.pseudo == collegue.pseudo ? collegueQuiDuBack : c;
      });
    });
    // .catch(error => console.log(error));
  }
  jedeteste(collegue) {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    //this.collegue.score -= 5;
    this.voteService
      .detesterUnCollegue(collegue)
      .subscribe(collegueQuiDuBack => {
        console.log(collegueQuiDuBack);
        this.collegues = this.collegues.map(c => {
          return c.pseudo == collegue.pseudo ? collegueQuiDuBack : c;
        });
      });
    // .catch(error => console.log(error));
  }
}
