import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Commentaire } from "../domain/commentaire";
@Injectable()
export class CommentaireService {
  constructor(private http: HttpClient) {
    this.http
      .get<Comment[]>("http://localhost:8080/commentaires")
      .subscribe(comments => this.commentSubj.next(comments));
  }
  private commentSubj = new BehaviorSubject<Comment[]>([]);

  sauvegarder(comment: Commentaire): Observable<Commentaire[]> {
    return this.http.post<Commentaire[]>(
      "http://localhost:8080/commentaires",
      comment
    );
  }
}
