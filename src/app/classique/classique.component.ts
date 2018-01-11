import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from "../shared/service/collegue.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-classique",
  templateUrl: "./classique.component.html",
  styleUrls: ["./classique.component.css"]
})
export class ClassiqueComponent implements OnInit {
  collegues: Collegue[] = [];
  constructor(private cService: CollegueService) {}
  limite = 100;
  private args: string;
  limiteField: FormControl = new FormControl();
  ngOnInit() {
    this.cService.listerCollegues().then(colleguesQuiVientDuBack => {
      this.collegues = colleguesQuiVientDuBack;
    });
    this.limiteField.valueChanges.subscribe(term => {
      this.limite = term;
    });
  }
}
