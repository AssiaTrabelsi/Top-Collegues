import { Component, OnInit } from "@angular/core";
import { Collegue } from "./shared/domain/collegue";
import { CollegueService } from "./shared/service/collegue.service";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private cService: CollegueService) {}
  title = "app";
  collegues: Collegue[] = [];
  nom: string;

  ngOnInit() {
    this.cService
      .listerCollegues()
      .subscribe(
        resultArray => (this.collegues = resultArray),
        error => console.log("error ::" + error)
      );
    /* this.cService.listerCollegues().then(colleguesQuiVientDuBack => {
      this.collegues = colleguesQuiVientDuBack;
    });
*/
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 10));
    this.cService
      .sauvegarder(new Collegue(pseudo.value, imageUrl.value, 10))
      .subscribe(colleguesQuiVientDuBack => {
        this.collegues = colleguesQuiVientDuBack;
      });
    this.nom = pseudo.value;

    setTimeout(() => {
      this.nom = null;
    }, 2000);

    return false; // pour éviter le rechargement de la page
  }
}
