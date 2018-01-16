import { Component, OnInit } from "@angular/core";
import { VoteService } from "../shared/service/vote.service";

@Component({
  selector: "app-votre-dernier-avis",
  templateUrl: "./votre-dernier-avis.component.html",
  styleUrls: ["./votre-dernier-avis.component.css"]
})
export class VotreDernierAvisComponent implements OnInit {
  constructor(private voteSvc: VoteService) {}
  type = "secondary";
  message = "Aucun dernier avis";

  ngOnInit() {
    this.voteSvc.avis.subscribe(avis => {
      this.type = avis.type;
      this.message =
        this.type === "danger"
          ? `Je déteste ${avis.pseudo}`
          : `J'aime ${avis.pseudo}`;
    });
  }
}
