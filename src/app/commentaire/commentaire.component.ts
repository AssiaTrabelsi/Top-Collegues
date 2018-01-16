import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Commentaire } from "../shared/domain/commentaire";
import { Collegue } from "../shared/domain/collegue";
import { CommentaireService } from "../shared/service/commentaire.service";
import { Comment } from "@angular/compiler";

@Component({
  selector: "app-commentaire",
  templateUrl: "./commentaire.component.html",
  styleUrls: ["./commentaire.component.css"]
})
export class CommentaireComponent implements OnInit {
  @Input() collegue: Collegue;

  closeResult: string;
  commentaire: Commentaire = new Commentaire(this.collegue, "");
  comments: Commentaire[] = [];

  constructor(
    private modalService: NgbModal,
    private commentService: CommentaireService
  ) {}

  ngOnInit() {
    this.commentaire = new Commentaire(this.collegue, "");
  }
  save() {
    this.commentService
      .sauvegarder(this.commentaire)
      .subscribe(comment => (this.comments = comment));
  }

  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
