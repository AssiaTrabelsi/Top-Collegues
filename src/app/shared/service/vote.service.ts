import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Vote } from "../domain/vote";
import { Collegue } from "../domain/collegue";

@Injectable()
export class VoteService {
  //avis
  private avisSubj = new Subject<{
    type: string;
    pseudo: string;
  }>();
  private avis = this.avisSubj.asObservable();

  constructor(private http: HttpClient) {
    this.http
      .get<Vote[]>("http://localhost:8080/api/votes")
      .subscribe(votes => this.votesSubj.next(votes));
  }
  private votesSubj = new BehaviorSubject<Vote[]>([]);

  getAllVote(): Observable<Vote[]> {
    return this.votesSubj.asObservable();
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http.patch<Collegue>(
      "http://localhost:8080/api/votes/",
      '{"action":"jaime", "collegue":' + JSON.stringify(unCollegue) + "}",
      { headers: new HttpHeaders().set("content-type", "application/json") }
    );
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http
      .patch<Collegue>(
        "http://localhost:8080/api/votes/",
        '{"action":"deteste", "collegue":' + JSON.stringify(unCollegue) + "}",
        { headers: new HttpHeaders().set("content-type", "application/json") }
      )
      .do(col => {
        this.avisSubj.next({ type: "danger", pseudo: col.pseudo });
      });
  }
} // fin de la classe
