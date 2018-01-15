import { Component, OnInit } from "@angular/core";
import { CollegueService } from "../shared/service/collegue.service";

@Component({
  selector: "app-site-en-ligne",
  templateUrl: "./site-en-ligne.component.html",
  styleUrls: ["./site-en-ligne.component.css"]
})
export class SiteEnLigneComponent implements OnInit {
  isOnline = true;
  message = "En ligne";
  constructor(private statusService: CollegueService) {}

  ngOnInit() {
    this.statusService.status.subscribe(online => {
      this.isOnline = online;
      this.message = online ? "En ligne" : "Hors ligne";
    });
  }
}
