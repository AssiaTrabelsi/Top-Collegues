import { Component, OnInit } from "@angular/core";
import { Collegue } from "./shared/domain/collegue";
import { CollegueService } from "./shared/service/collegue.service";

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
    this.cService.listerCollegues().then(colleguesQuiVientDuBack => {
      this.collegues = colleguesQuiVientDuBack;
    });

    /*
     this.collegues.push(
      new Collegue(
        "Melodie",
        "https://www.seduction-efficace.com/wp-content/uploads/2015/04/signaux-dinteret-filles.jpg",
        12
      )
    );
    this.collegues.push(
      new Collegue(
        "Alexandre",
        "https://slab.adopteunmec.com/uploads/survey/top100_2017/athletes_antoine_griezmann_470x416.jpg",
        26
      )
    );

    this.collegues.push(
      new Collegue(
        "Sandra",
        "http://media.gamaniak.com/gal/jolies-filles-3/gamaniak_jolies-filles-3_01.jpg",
        30
      )
    );
    this.collegues.push(
      new Collegue(
        "Mouhamed",
        "https://boutique.univ-rouen.fr/wp-content/uploads/2016/05/xboutique-univ-rouen-normandie-polo-homme-gris3-300x300.jpg.pagespeed.ic.z_aKHB_Xbh.jpg",
        25
      )
    );
    this.collegues.push(
      new Collegue(
        "Yves",
        "https://t4.ftcdn.net/jpg/00/78/73/53/240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg",
        22
      )
    );
    this.collegues.push(
      new Collegue(
        "Clement",
        "https://image.afcdn.com/dossiers/D20100514/pattinson-162806_L.jpg",
        20
      )
    );
    this.collegues.push(
      new Collegue(
        "Thien Ban",
        "https://thumbs.dreamstime.com/b/homme-vietnamien-de-sourire-52875652.jpg",
        20
      )
    );
    this.collegues.push(
      new Collegue(
        "Rossi",
        "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdQAAAAJDk1MWNmZDAwLTNiMTgtNDU0NC05NzM5LWY3MjRhMjBmOGM0Yg.jpg",
        20
      )
    ); */
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 10));
    this.cService
      .sauvegarder(new Collegue(pseudo.value, imageUrl.value, 10))
      .then(colleguesQuiVientDuBack => {
        this.collegues = colleguesQuiVientDuBack;
      });
    this.nom = pseudo.value;

    setTimeout(() => {
      this.nom = null;
    }, 2000);
    return false; // pour éviter le rechargement de la page
  }
}
