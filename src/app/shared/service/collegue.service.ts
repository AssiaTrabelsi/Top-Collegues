import { Injectable } from "@angular/core";
import { Collegue } from "../domain/collegue";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/interval";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CollegueService {
  constructor(private http: HttpClient) {
    this.http
      .get<Collegue[]>("http://localhost:8080/api/collegues")
      .subscribe(collegues => this.collegueSubj.next(collegues));

    this.signOut();
  }

  /* listerCollegues(): Promise<Collegue[]> {
    return this.http
      .get<Collegue[]>("http://localhost:8080/api/collegues")
      .toPromise();
  }*/

  private collegueSubj = new BehaviorSubject<Collegue[]>([]);
  collegues = this.collegueSubj.asObservable();
  //avis
  private avisSubj = new Subject<{
    type: string;
    pseudo: string;
  }>();
  avis = this.avisSubj.asObservable();

  //status
  private statusSubj = new BehaviorSubject<boolean>(navigator.onLine);
  status = this.statusSubj.asObservable();

  listerCollegues(): Observable<Collegue[]> {
    /*this.http
      .get<Collegue[]>("http://localhost:8080/api/collegues")
      .subscribe(collegues => this.collegueSubj.next(collegues));
*/
    return this.collegueSubj.asObservable();
  }

  sauvegarder(newCollegue: Collegue): Observable<Collegue[]> {
    return this.http.post<Collegue[]>(
      "http://localhost:8080/api/collegues",
      newCollegue
    );
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http
      .patch<Collegue>(
        "http://localhost:8080/api/collegues/" + unCollegue.pseudo,
        '{"action":"jaime"}',
        { headers: new HttpHeaders().set("content-type", "application/json") }
      )
      .do(col => {
        this.avisSubj.next({ type: "success", pseudo: col.pseudo });
      });
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http
      .patch<Collegue>(
        "http://localhost:8080/api/collegues/" + unCollegue.pseudo,
        '{"action":"deteste"}',
        { headers: new HttpHeaders().set("content-type", "application/json") }
      )
      .do(col => {
        this.avisSubj.next({ type: "danger", pseudo: col.pseudo });
      });
  }

  signOut() {
    //Observable.interval(2000).subscribe(() => console.log("ddd"));
    Observable.interval(2000)
      .map(() => navigator.onLine)
      .subscribe(st => this.statusSubj.next(st));
  }
}
