import { Component, OnInit } from "@angular/core";
import { VoteService } from "../shared/service/vote.service";
import { Vote } from "../shared/domain/vote";

@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.css"]
})
export class HistoriqueComponent implements OnInit {
  private votes: Vote[];
  constructor(private voteService: VoteService) {}
  ngOnInit() {
    this.voteService.getAllVote().subscribe(votesFromService => {
      this.votes = votesFromService;
    });
  }
}
